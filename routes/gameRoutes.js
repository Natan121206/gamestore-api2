const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/', validateGame, gameController.createGame);
router.put('/:id', validateGame, gameController.updateGame);

// Definindo as rotas e associando aos métodos do controller
router.get('/', gameController.getAllGames);
router.post('/', gameController.createGame);
router.put('/:id', gameController.updateGame);
router.delete('/:id', gameController.deleteGame);

module.exports = router;