/*
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
*/


const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://104.248.108.124:61613')

client.on('connect', function () {
  console.log('Conectado');
  //client.publish('presence', 'Hello mqtt')

 // client.publish('YDB/DISTRIBUTE', '')
  
 // client.publish('YDB/DISTRIBUTE', 'Hello mqtt')


  client.subscribe('#', function (err, e) {

    console.log(e)

    //  if (!err) {
    //   client.publish('YDB/DISTRIBUTE', 'Hello mqtt')
    // }

    

    //869825040522328d49cd5
  })


})


client.on('message', function (topic, message) {
  // message is Buffer

  console.log('ID Máquina ' + topic.split('/')[2])

  console.log(topic + ' - ' + message.toString())



  //client.end()
})