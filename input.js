let connection;


const setupInput = function(conn) {
    connection = conn;

 //const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();

    const handleUserInput = function(key) {
 
      if (key === '\u0003') {
        process.exit(); 
      }
      console.log('_______________', key)
      if (key === 'w') {
        conn.write('Move: up') 
      }
      if (key === 'a') {
        conn.write("Move: left")
      }
      if (key === 's') {
        conn.write("Move: down")
      } 
      if (key === 'd') {
        conn.write("Move: right")
      }
    }
    
    stdin.on('data', handleUserInput)
   
    //handleUserInput()
    return stdin;
  } 

  
  module.exports = { setupInput };

  
  