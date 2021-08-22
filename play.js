const net = require("net");


// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: '192.168.0.15' ,// IP address here,
    port: 50541 , // PORT number here,
  
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Connected to Server")
  })
  conn.on('data', (data) => { 
        //get message back from server
        console.log('Message from Server', data)
  })
  return conn;
}

//console.log("Connecting ...");
connect();


