const server = require("./app");
//const { ObjectID, ObjectId } = require("mongodb");
-
server.listen(3000, async function () {
  console.log("Servidor cardapio em funcionamento !");

//  const mqtt = require('mqtt') 
 // const client  = mqtt.connect('tcp://monstro.tv.br:61616')

 // console.log(client);
//  let Mesa = require('./api/models/mesa');
 // let mesa = new Mesa({
  //  empresa: ObjectId("622ad928dd8d8a1ad4c2545b"),
  //  nome: 'F2'
  //})

  //mesa.save();

const puppeteer = require('puppeteer');

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://dejt.jt.jus.br/dejt/f/n/materiapublicadacon');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
  })();

});
https://dejt.jt.jus.br/dejt/f/n/materiapublicadacon#

https://dejt.jt.jus.br/dejt/f/n/materiapublicadacon#

