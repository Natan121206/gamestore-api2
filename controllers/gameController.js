const Game = require('../models/Game');

// Listar todos os jogos
exports.getAllGames = async (req, res, next) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (err) {
        next(err); // Passa o erro para o middleware de erro
    }
};

// Criar um novo jogo
exports.createGame = async (req, res, next) => {
    try {
        const game = new Game(req.body);
        await game.save();
        res.status(201).json(game);
    } catch (err) {
        next(err);
    }
};

exports.updateGame = async (req, res, next) => {
    try {
        // { new: true } retorna o documento atualizado
        // { runValidators: true } garante que as validações do Model sejam aplicadas no update
        const game = await Game.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, 
            runValidators: true 
        });
        
        if (!game) return res.status(404).json({ message: "Jogo não encontrado" });
        res.status(200).json(game);
    } catch (err) {
        next(err); // Captura erro de validação (ex: ano inválido)
    }
};

// DELETE: Remove um jogo pelo ID
exports.deleteGame = async (req, res, next) => {
    try {
        const game = await Game.findByIdAndDelete(req.params.id);
        if (!game) return res.status(404).json({ message: "Jogo não encontrado" });
        res.status(204).send(); // 204 indica sucesso e sem conteúdo
    } catch (err) {
        next(err);
    }
};