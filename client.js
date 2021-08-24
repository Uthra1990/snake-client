const net = require("net");
const { IP, PORT } = require('./constants');

 const connect = function (data) {
    const conn = net.createConnection({
      host: IP ,// IP address here,
      port: PORT , // PORT number here,
    
    });
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on('connect', () => {
      console.log("Successfully connected to game server")
      
      conn.write('Name: URC')
      //conn.write('Move: up')
      //conn.write('Move: down')

    })
    conn.on('data', (data) => { 
          //get message back from server
          console.log(data)
    })
    return conn;
 }
  
  //console.log("Connecting ...");
  //connect();
  
  module.exports = {connect};