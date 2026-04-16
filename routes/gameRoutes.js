const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController'); 
const validateGame = require('../middlewares/validateGame');
const auth = require('../middlewares/auth');

router.get('/', gameController.getAllGames); 
router.post('/', auth, validateGame, gameController.createGame);
router.put('/:id', auth, validateGame, gameController.updateGame);
router.delete('/:id', auth, gameController.deleteGame);

module.exports = router;