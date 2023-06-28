import ethereumtx from 'ethereumjs-tx';
const EthereumTx = ethereumtx.Transaction;
import Web3 from 'web3';
const web3 = new Web3('https://mainnet.infura.io/YOUR_INFURA_KEY');

const account1 = '0xYourAccount'; 
const account2 = '0xRecipientAccount';

const privateKey1 = Buffer.from('YOUR_PRIVATE_KEY', 'hex');

web3.eth.getTransactionCount(account1, (err, txCount) => {
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  };

  const tx = new EthereumTx(txObject, { chain: 'mainnet' });
  tx.sign(privateKey1);

  const serializedTx = tx.serialize();
  const raw = '0x' + serializedTx.toString('hex');

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('Transaction Hash:', txHash);
  });
});
