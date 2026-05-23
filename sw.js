const CACHE = "drishyam-v1";
const PRECACHE = [
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./appstore-images/android/launchericon-192x192.png",
  "./appstore-images/android/launchericon-512x512.png",
  "./appstore-images/ios/180.png",
  "./appstore-images/ios/32.png",
  "./appstore-images/ios/16.png"
];

self.addEventListener("install", e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)))
);

self.addEventListener("fetch", e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);
