const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EstabelecimentoSchema = new Schema({
    status: { type: Number, default: 1 }, //2 = VIP 1 = Ativo 0 = Inativo  
    fantasia : String,
    cnpj : String,
    horarioFuncionamento: String,
    Logo: Buffer,
    aluguel:{
        taxaHoraria: Number,        
    },
    endereco:{
        //estado: Number,
        logradouro : String,
        latitude: String,
        longitude: String
    },
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("estabelecimento", EstabelecimentoSchema);
