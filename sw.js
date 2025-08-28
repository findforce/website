var STATIC_CACHE = "findforce-static-v1";

var STATIC_ASSETS = ["/", "/findforce-32px.png", "/findforce-16px.png"];

self.addEventListener("install", function handleInstall(event) {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(function populateCache(cache) {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(function skipWaiting() {
        return self.skipWaiting();
      }),
  );
});

self.addEventListener("activate", function handleActivate(event) {
  event.waitUntil(
    caches
      .keys()
      .then(function cleanupOldCaches(cacheNames) {
        return Promise.all(
          cacheNames.map(function checkCache(cacheName) {
            if (cacheName !== STATIC_CACHE) {
              return caches.delete(cacheName);
            }
            return Promise.resolve();
          }),
        );
      })
      .then(function claimClients() {
        return self.clients.claim();
      }),
  );
});

self.addEventListener("fetch", function handleFetch(event) {
  if (event.request.method !== "GET") {
    return;
  }

  var url = new URL(event.request.url);

  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then(function checkCache(response) {
        return response || fetch(event.request);
      }),
    );
  }
});

self.addEventListener("message", function handleMessage(event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
