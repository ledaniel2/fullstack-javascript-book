web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
  if (!error) {
    console.log(blockHeader);
  } else {
    console.log(error);
  }
});
