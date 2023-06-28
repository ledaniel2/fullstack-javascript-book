self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;  // if the response exists in cache, return the cached version
        }
        return fetch(event.request);  // otherwise, fetch from network
      })
  );
});
