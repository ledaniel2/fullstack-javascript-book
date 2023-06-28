const transactionHash = '0xa2c9fd97c0cfd771f2bc1bb13a87f815a91e14fb51bdd9cf165209b09b7217cb'; // Replace with your transaction hash
web3.eth.getTransaction(transactionHash, (err, transaction) => {
  console.log(transaction);
});
