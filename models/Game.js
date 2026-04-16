const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Publisher = require('./Publisher'); // Importe o novo modelo

const Game = sequelize.define('Game', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    anoLancamento: { type: DataTypes.INTEGER, allowNull: false },
    genero: { type: DataTypes.STRING, allowNull: false }
});

// Relacionamento: Um Jogo pertence a uma Editora
Game.belongsTo(Publisher, { foreignKey: 'publisherId' });
Publisher.hasMany(Game, { foreignKey: 'publisherId' });

module.exports = Game;