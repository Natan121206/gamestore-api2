const Game = require('../models/Game');
const Publisher = require('../models/Publisher');

exports.getAllGames = async (req, res, next) => {
    try {
        const games = await Game.findAll({
            include: [Publisher] // O Sequelize faz o JOIN automaticamente aqui
        });
        res.json(games);
    } catch (err) { next(err); }
};

// Criar novo jogo
exports.createGame = async (req, res, next) => {
    try {
        const game = await Game.create(req.body);
        res.status(201).json(game);
    } catch (err) {
        next(err);
    }
};

// Atualizar jogo
exports.updateGame = async (req, res, next) => {
    try {
        const [updated] = await Game.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ message: "Jogo não encontrado" });
        const game = await Game.findByPk(req.params.id);
        res.status(200).json(game);
    } catch (err) {
        next(err);
    }
};

// Deletar jogo
exports.deleteGame = async (req, res, next) => {
    try {
        const deleted = await Game.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ message: "Jogo não encontrado" });
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};