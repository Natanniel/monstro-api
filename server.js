var fs = require('fs');
var mqttServer = require('mqtt-server');
 
servers = mqttServer({
 // mqtt: 'tcp://localhost:61613',
 // mqtts: 'ssl://localhost:61613',
  mqttws: 'ws://localhost:61613',
 // mqtwss: 'wss://localhost:61613'
}, {
  ssl: {
  //  key: fs.readFileSync('./key.key'),
   // cert: fs.readFileSync('./crt.crt')
  },
  emitEvents: true // default
}, function(client){
  console.log('Algo aqui');
  console.log(client);
  
  client.connack({
    returnCode: 0
  });
});
 
servers.listen(function(){
  
  console.log('listening!');

});
