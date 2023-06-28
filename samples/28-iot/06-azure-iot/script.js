import { clientFromConnectionString } from 'azure-iot-device-mqtt';
import { Message } from 'azure-iot-device';

const connectionString = 'HostName=<my-host-name>;DeviceId=<my-device-id>;SharedAccessKey=<my-shared-access-key>';

const client = clientFromConnectionString(connectionString);

const connectCallback = (err) => {
  if (err) {
    console.error('Could not connect: ' + err.message);
  } else {
    console.log('Connected to Azure IoT Hub');
    const message = new Message('Hello Azure');
    client.sendEvent(message, (err) => {
      if (err) console.error(err.toString());
    });
  }
};

client.open(connectCallback);
