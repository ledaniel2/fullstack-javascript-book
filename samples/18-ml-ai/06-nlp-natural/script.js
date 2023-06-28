import natural from 'natural';

const text = 'I liked the movie.';
const tokenizer = new natural.WordTokenizer();
console.log(tokenizer.tokenize(text));  // "['I', 'liked', 'the', 'movie']"
