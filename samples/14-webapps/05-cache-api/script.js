fetch('/api/todos')
  .then(response => {
    if (response.ok) {
      caches.open('api-cache').then(cache => cache.put('/api/todos', response));
    }
  });
