import log from "loglevel";

var CACHE_NAME = "findforce-v1.0.0";
var STATIC_CACHE = "findforce-static-v1";
var DYNAMIC_CACHE = "findforce-dynamic-v1";

var STATIC_ASSETS = [
  "/",
  "/benchmark-report",
  "/terms",
  "/privacy",
  "/dpa",
  "/cookie-policy",
  "/security",
  "/findforce-32px.png",
  "/findforce-16px.png",
  "/apple-touch-icon.png",
  "/site.webmanifest",
  "/og-image.png",
];

var EXTERNAL_RESOURCES = [
  "https://cdn.jsdelivr.net/npm/@cap.js/widget@0.1.25/cap.min.js",
  "https://cap.so/embed/h8ck499yvf7q5fa",
];

function isStaticAsset(url) {
  return STATIC_ASSETS.some(function checkAsset(asset) {
    return url.pathname === asset;
  });
}

function isExternalResource(url) {
  return EXTERNAL_RESOURCES.some(function checkResource(resource) {
    return url.href.includes(resource);
  });
}

function isAPIRequest(url) {
  return (
    url.href.includes("api.findforce.io") ||
    url.href.includes("cap.findforce.io")
  );
}

function isImageRequest(url) {
  return url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i);
}

self.addEventListener("install", function handleInstall(event) {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(function populateCache(cache) {
        return Promise.allSettled(
          STATIC_ASSETS.map(function cacheAsset(asset) {
            return cache.add(asset).catch(function handleAssetError(error) {
              log.error("failed adding cache", error);
              return null;
            });
          })
        );
      })
      .then(function activateServiceWorker() {
        if (self.registration.active) {
          notifyClientsOfUpdate();
        }
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function handleActivate(event) {
  event.waitUntil(
    caches
      .keys()
      .then(function cleanupOldCaches(cacheNames) {
        return Promise.all(
          cacheNames.map(function checkCache(cacheName) {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName);
            }
            return Promise.resolve();
          })
        );
      })
      .then(function claimClients() {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function handleFetch(event) {
  var requestUrl = new URL(event.request.url);

  if (event.request.method !== "GET") {
    return;
  }

  if (isStaticAsset(requestUrl)) {
    event.respondWith(
      caches.match(event.request).then(function checkCache(response) {
        return (
          response ||
          fetch(event.request).then(function cacheAndReturn(fetchResponse) {
            var responseClone = fetchResponse.clone();
            caches.open(STATIC_CACHE).then(function addToCache(cache) {
              cache.put(event.request, responseClone);
            });
            return fetchResponse;
          })
        );
      })
    );
    return;
  }

  if (isAPIRequest(requestUrl)) {
    event.respondWith(
      fetch(event.request)
        .then(function returnFreshResponse(response) {
          if (response.ok) {
            var responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(function cacheResponse(cache) {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(function handleAPIError() {
          return caches
            .match(event.request)
            .then(function returnCachedOrError(cachedResponse) {
              return (
                cachedResponse ||
                new Response(
                  JSON.stringify({
                    error: "Network unavailable",
                    offline: true,
                  }),
                  {
                    status: 503,
                    headers: { "Content-Type": "application/json" },
                  }
                )
              );
            });
        })
    );
    return;
  }

  if (isImageRequest(requestUrl)) {
    event.respondWith(
      caches.match(event.request).then(function checkImageCache(response) {
        return (
          response ||
          fetch(event.request)
            .then(function cacheImage(fetchResponse) {
              if (fetchResponse.ok) {
                var responseClone = fetchResponse.clone();
                caches
                  .open(DYNAMIC_CACHE)
                  .then(function addImageToCache(cache) {
                    cache.put(event.request, responseClone);
                  });
              }
              return fetchResponse;
            })
            .catch(function handleImageError() {
              return new Response(
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" fill="#9ca3af">Image unavailable</text></svg>',
                { headers: { "Content-Type": "image/svg+xml" } }
              );
            })
        );
      })
    );
    return;
  }

  if (isExternalResource(requestUrl)) {
    event.respondWith(
      fetch(event.request)
        .then(function cacheExternal(response) {
          if (response.ok) {
            var responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(function addToCache(cache) {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(function handleExternalError() {
          return caches.match(event.request);
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function checkGeneralCache(response) {
      return (
        response ||
        fetch(event.request).catch(function handleGeneralError() {
          if (event.request.destination === "document") {
            return caches.match("/");
          }
        })
      );
    })
  );
});

self.addEventListener("message", function handleMessage(event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }

  if (event.data && event.data.type === "CLEAR_CACHE") {
    caches
      .keys()
      .then(function clearAllCaches(cacheNames) {
        return Promise.all(
          cacheNames.map(function deleteCache(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
      .then(function notifyCleared() {
        event.ports[0].postMessage({ cleared: true });
      });
  }
});

self.addEventListener("sync", function handleBackgroundSync(event) {
  if (event.tag === "background-sync") {
    event.waitUntil(self.registration.sync.register("report-submission"));
  }
});
function notifyClientsOfUpdate() {
  self.clients.matchAll().then(function notifyClients(clients) {
    clients.forEach(function sendMessage(client) {
      client.postMessage({
        type: "SW_UPDATE_AVAILABLE",
      });
    });
  });
}
