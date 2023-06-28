import mqtt from 'mqtt';
const client  = mqtt.connect('mqtt://test.mosquitto.org'); // public test broker

client.on('connect', () => {
  setInterval(() => {
    client.publish('myTopic', 'Hello mqtt');
    console.log('Message Sent');
  }, 5000);
});
