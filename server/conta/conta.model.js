const mongoose = require('mongoose');

const ContaSchema = new mongoose.Schema({
    descricao: String,
    valor: Number,
    data: Date,
    grupo: String,
    categoria: String
});
//faltando participantes e quem realizou pgto

module.exports = mongoose.model('Conta', ContaSchema);