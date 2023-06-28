import Web3 from 'web3';
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY');

const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'; // Replace with your address
web3.eth.getBalance(address, (err, wei) => {
  const balance = web3.utils.fromWei(wei, 'ether');
  console.log(balance);
});
