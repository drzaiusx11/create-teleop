let robot = require('create-oi');
let keypress = require('keypress');
const SPEED = 100;
 
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
 
robot.init({ serialport: "/dev/tty.usbserial-FTE2V098", version: 1 });

robot.on('ready', function() {
  console.log('robot ready');
});

process.stdin.on('keypress', function (ch, key) {
  if (key && key.ctrl && key.name == 'c') {
    process.exit(0);
  }

  switch (ch) {
  case 'a':
    robot.drive(SPEED, 1);
  break;
  case 's':
    robot.drive(0, 0);
  break;
  case 'd':
    robot.drive(-SPEED, 1);
  break;
  case 'w':
    robot.drive(-SPEED, 0);
  break;
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();
