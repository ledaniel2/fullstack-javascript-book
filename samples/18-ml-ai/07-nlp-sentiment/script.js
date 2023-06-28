import Sentiment from 'sentiment';
const sentiment = new Sentiment();

const text = 'I love learning about machine learning and artificial intelligence!';
const result = sentiment.analyze(text);

console.log(result); 
