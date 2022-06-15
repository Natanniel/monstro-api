const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ClienteSchema = new Schema({
    status: { type: Number, default: 1 }, //2 = VIP 1 = Ativo 0 = Inativo  
    nome: String,
    sobrenome: String,
    cpf: String,
    telefone: String,
    cartao: {
        cartao: String,
        vencimento: Date,
        cvv : String
    },
    outros:{
        codigoVerificacao: String
    }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("cliente", ClienteSchema);
