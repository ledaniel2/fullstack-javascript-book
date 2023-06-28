navigator.serviceWorker.ready.then((registration) => {
  registration.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
    console.log('Subscribed for push notifications ', subscription.endpoint);
  });
});
