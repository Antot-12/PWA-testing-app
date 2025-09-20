// public/service-worker.js

const BASE_PATH = (self.registration.scope.endsWith('/') ? self.registration.scope.slice(0, -1) : self.registration.scope) || '';
 

const CACHE_NAME = "neon-pwa-v1";
const OFFLINE_URLS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/about/index.html`,
  `${BASE_PATH}/_next/static/`, 
];

// On install, try to cache the app shell (best-effort).
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        await cache.addAll(OFFLINE_URLS);
      } catch (e) {
        // Some URLs (like _next/static/* hashes) will be fetched at runtime instead.
        // Fail silently; runtime caching below still helps.
      }
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

// Strategy:
// - HTML navigations: network-first, fallback to cache.
// - Static assets (_next/static, images, CSS): cache-first, fallback to network.
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Only handle GET
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // HTML navigation requests
  const isPageNav = req.mode === "navigate";

  if (isPageNav) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          // Try fallback to cached root
          return caches.match(`${BASE_PATH}/index.html`);
        })
    );
    return;
  }

  // Static/runtime assets: cache-first
  const isStatic = url.pathname.includes("/_next/static/") || url.pathname.includes("/icons/") || url.pathname.endsWith(".css") || url.pathname.endsWith(".js") || url.pathname.endsWith(".png") || url.pathname.endsWith(".jpg") || url.pathname.endsWith(".svg");

  if (isStatic) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((res) => {
            const resCopy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resCopy));
            return res;
          })
          .catch(() => cached || new Response("", { status: 504 }));
      })
    );
  }
});
