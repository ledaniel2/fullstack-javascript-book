const subscription = web3.eth.subscribe('newBlockHeaders');

subscription.unsubscribe((error, success) => {
  if (success) {
    console.log('Successfully unsubscribed!');
  } else {
    console.log('Error unsubscribing!');
  }
});
