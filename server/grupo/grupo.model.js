const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({
    id: String,
    nome: String,
    categoria: String
});
//faltando membros

module.exports = mongoose.model('Grupo', GrupoSchema);