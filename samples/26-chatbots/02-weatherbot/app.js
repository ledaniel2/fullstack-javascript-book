const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

async function getWeather(city) {
  const api_key = 'your_api_key_here';
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
  return Math.floor(response.data.main.temp - 273.14);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/chat', async function (req, res) {
  const userMessage = req.body.message;
  let botMessage = '';

  if (userMessage.includes('weather')) {
    const city = userMessage.split(' ').pop();
    const temp = await getWeather(city);
    botMessage = `The current temperature in ${city} is ${temp}°C`;
  } else {
    botMessage = 'Sorry, I did not understand that.';
  }

  res.send({ message: botMessage });
});

const server = app.listen(port, () => {
  console.log(`Weatherbot is listening on port ${port}`);
});
