import onoff from 'onoff';
const Gpio = onoff.Gpio;
const LED = new Gpio(18, 'out');

setInterval(() => {
  let value = LED.readSync() ^ 1; // Use XOR to flip the value
  LED.writeSync(value);
}, 500);
