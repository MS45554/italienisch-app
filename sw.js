/* Service Worker: Offline-Cache. Bei Änderungen an Dateien CACHE-Version erhöhen. */
var CACHE = "italiano-v3";
var ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./data.js", "./manifest.webmanifest",
  "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/favicon-32.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
// Stale-while-revalidate: sofort aus dem Cache, im Hintergrund aktualisieren
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(function (cache) {
    return cache.match(e.request, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(e.request).then(function (res) { if (res && res.ok) cache.put(e.request, res.clone()); return res; }).catch(function () { return hit || (e.request.mode === "navigate" ? cache.match("./index.html") : undefined); });
      return hit || net;
    });
  }));
});
