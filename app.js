const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
class App {

  constructor() {
    this.server = express();
    console.log('Algo esta tentando falar alguma coisa');
    
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.use(cors({ credentials: true }));

    this.middlewares();
    this.routes();
  }

  middlewares() {
            
  }

  routes() {
   
  }

}
module.exports = new App().server