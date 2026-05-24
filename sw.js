const VERSION = "26.5.2";
const CACHE_NAME = `drishyam-cache-v${VERSION}`;

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js",
  "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js",
  "https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js"
];

// Install Event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// Listen for messages from the client
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  } else if (event.data === "GET_VERSION") {
    event.ports[0].postMessage(VERSION);
  }
});
