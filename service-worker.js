self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tetonor-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/IconoMovilTetonorPequeño.png",
        "/IconoMovilTetonor.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
