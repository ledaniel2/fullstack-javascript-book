let cache = {};

function fetchWithCache(url) {
  if (cache[url]) {
    return Promise.resolve(cache[url]);
  }

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      cache[url] = data;
      return data;
    });
}
