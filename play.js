const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

const connect1 = connect();

console.log('Connecting ...');

setupInput(connect1);

module.exports = { connect };