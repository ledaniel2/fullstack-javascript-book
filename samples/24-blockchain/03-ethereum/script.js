import Web3 from 'web3';

// connect to Infura node
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR_INFURA_KEY"));

// get latest block number
web3.eth.getBlockNumber().then(console.log);
