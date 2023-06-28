const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/chat', function (req, res) {
  const userMessage = req.body.message;
  
  // Processing unit: simple pattern matching
  let botMessage = '';
  if (userMessage.includes('hello')) {
    botMessage = 'Hello, how can I assist you today?';
  } else if (userMessage.includes('help')) {
    botMessage = 'Sure, I am here to help you.';
  } else {
    botMessage = 'Sorry, I did not understand that.';
  }

  // Response generator
  res.send({ message: botMessage });
});

const server = app.listen(port, () => {
  console.log(`Chatbot is listening on port ${port}`);
});
