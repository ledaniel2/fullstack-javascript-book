self.addEventListener('push', (event) => {
  const title = 'New Message';
  const options = {
    body: 'You have a new message!'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
