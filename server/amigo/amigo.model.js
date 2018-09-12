const mongoose = require('mongoose');

const AmigoSchema = new mongoose.Schema({
    id: String,
    nome: String
});

module.exports = mongoose.model('Amigo', AmigoSchema);