const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "assets/css/styles.css",
    "/assets/js/index.js",
    "/assets/js/db.js",
    "/assets/images/icons/icon-192x192.png",
    "/assets/images/icons/icon-512x512.png",
    "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "https://cdn.jsdelivr.net/npm/chart.js@2.8.0"
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";
//create or load caches
self.addEventListener("install", (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});
//remove old caches
self.addEventListener("activate", (evt) => {
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );

        })
    );
    self.clients.claim();
});
//cache successfull GET request to API
self.addEventListener("fetch", (evt) => {
    if (evt.request.url.includes("/api/") && evt.request.method === "GET" {
        evt.respondWith(
            caches
                .open(DATA_CACHE_NAME)
                .then((cache) => {
                    return fetch(evt.request)
                        .then((response) => {
                            if (response.status === 200) {
                                cache.put(evt.request, response.clone());
                            }
                            
                            return response;
                        })
                        .catch((err) => console.log(err))
                );
                
        return;
    }
    
    evt.respondWith(
        caches.match(evt.request).then((response) => {
            return response || fetch(evt.request);
        })
    );
});