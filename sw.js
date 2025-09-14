var STATIC_CACHE = "static-v2";
var RUNTIME_CACHE = "runtime-v2";

var STATIC_ASSETS = ["/"];

var RUNTIME_CACHE_ORIGINS = [
  "https://analytics.findforce.io",
  "https://chromewebstore.google.com",
];

self.addEventListener("install", function onInstall(event) {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function openCache(cache) {
      return Promise.allSettled(
        STATIC_ASSETS.map(function cacheAsset(asset) {
          return cache.add(asset).catch(function handleError() {
            return null;
          });
        }),
      );
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", function onActivate(event) {
  event.waitUntil(
    caches.keys().then(function getCacheNames(cacheNames) {
      return Promise.all(
        cacheNames.map(function checkCacheName(cacheName) {
          if (cacheName !== STATIC_CACHE && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
          return undefined;
        }),
      );
    }),
  );
  self.clients.claim();
});

self.addEventListener("fetch", function onFetch(event) {
  var url = new URL(event.request.url);

  if (event.request.method !== "GET") {
    return;
  }

  if (
    STATIC_ASSETS.some(function checkAsset(asset) {
      return url.pathname === asset;
    })
  ) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(function openCache(cache) {
        return cache.match(event.request).then(function checkCache(response) {
          return response || fetch(event.request);
        });
      }),
    );
    return;
  }

  if (
    RUNTIME_CACHE_ORIGINS.some(function checkOrigin(origin) {
      return url.origin === origin;
    })
  ) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then(function openCache(cache) {
        return cache.match(event.request).then(function checkCache(response) {
          var fetchPromise = fetch(event.request).then(
            function handleResponse(response) {
              if (response.ok) {
                cache.put(event.request, response.clone());
              }
              return response;
            },
          );
          return response || fetchPromise;
        });
      }),
    );
  }
});
