
let machine = {
  //  "TE": "WEB",
  // "MI": "C14W00700211",
  //  "TI": "2599",
  "BI": "BC0713E4",
  "AT": "Borrow",
  //  "TS ": "1653933947",
  //  "AC": "1"
}


const mqtt = require('mqtt');
const { signal } = require('nodemon/lib/config/defaults');
const client = mqtt.connect('mqtt://104.248.108.124:61613')


client.on('connect', function () {
  console.log('Conectado ' + Date.now().toLocaleString());
  //client.publish('presence', 'Hello mqtt')
  client.publish('SERVER/EQUIPMENT/C14W00700211', JSON.stringify(machine))

  //  EQUIPMENT/SERVER/C14W00700211

  client.subscribe('#', function (err, e) {

    console.log(e + ' ' + Date.now().toLocaleString())

    //  if (!err) {
    //   client.publish('YDB/DISTRIBUTE', 'Hello mqtt')
    // }

    //869825040522328d49cd5
  })
})



client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic)
  console.log(JSON.parse(message))

  let signal = JSON.parse(message)

  let dados = {
    maquina : signal.MI,
    baterias : signal.DD.BL
  }

  let api = require('axios').default;
  
  api.post('http://localhost:3000/maquinas/sinal',dados).then(function(){

  })


  console.log(dados)
  //console.log(signal.DD)

 // console.log(signal.DD.BL)
  //client.end()
})

