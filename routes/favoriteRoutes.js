const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const favoritesController = require('../controllers/favoritesController');

// Implementar a futuro

//router.get('/');
//router.delete('/:id');
router.post('/:id', auth, favoritesController.addFavorite);

module.exports = router;