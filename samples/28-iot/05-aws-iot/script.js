import awsIot from 'aws-iot-device-sdk';

const device = awsIot.device({
   keyPath: 'private.pem.key',
  certPath: 'certificate.pem.crt',
    caPath: 'root-CA.crt',
  clientId: 'myAwsClientId',
      host: 'data.iot.<region>.amazonaws.com'
});

device
  .on('connect', () => {
    console.log('Connected to AWS IoT');
    device.publish('topic_1', JSON.stringify({ test_data: 1}));
});
