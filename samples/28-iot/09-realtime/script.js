import mqtt from 'mqtt';
const client = mqtt.connect('wss://broker.example.com:9001');

client.on('connect', () => {
  client.subscribe('myTopic', (err) => {
    if (!err) {
      console.log('Subscribed to myTopic');
    }
  });
});

client.on('message', (topic, message) => {
  // message is a Buffer
  console.log(message.toString());
});
