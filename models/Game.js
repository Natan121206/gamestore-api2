const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    desenvolvedora: { type: String, required: true },
    anoLancamento: { type: Number, required: true },
    genero: { type: String, required: true }
});

module.exports = mongoose.model('Game', gameSchema);