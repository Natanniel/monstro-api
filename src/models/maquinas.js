const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MaquinaSchema = new Schema({
    status: { type: Number, default: 1 }, //  1 = Ativo 0 = Inativo      
    estabelecimento: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "estabelecimento" },    
    ultimoSinal: Date,
    maquina : String,
    qrcode : String,
    qrcodeAlternativo: String,
    baterias: [{
        codigo : String,
        carga : Number,
        status: Boolean,
        saida: Number
    }]
}, { timestamps: true });

// Export the model
module.exports = mongoose.model("maquina", MaquinaSchema);
