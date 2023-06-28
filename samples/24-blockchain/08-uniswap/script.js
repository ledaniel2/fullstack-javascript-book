import { ChainId, Token, TokenAmount, Pair, Route, Trade, Fetcher, Percent } from '@uniswap/sdk';
import Web3 from 'web3';

const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY');

// Define token addresses
const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f';
const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

// Fetch pair data
const dai = new Token(ChainId.MAINNET, DAI, 18);
const weth = new Token(ChainId.MAINNET, WETH, 18);

const pair = await Fetcher.fetchPairData(dai, weth);

// Define route
const route = new Route([pair], weth);

// Define trade (swap 1 ETH for DAI)
const trade = new Trade(route, new TokenAmount(weth, '1000000000000000000'), TradeType.EXACT_INPUT);
