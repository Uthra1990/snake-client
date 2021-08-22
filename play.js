const {connect} = require('./client.js')



const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit(); }
    });
  }
  return stdin;
}


setupInput()

// establishes a connection with the game server
