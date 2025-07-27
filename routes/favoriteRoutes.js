const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const favoritesController = require('../controllers/favoritesController');

//router.get('/');
router.post('/:id', auth, favoritesController.addFavorite);
//router.delete('/:id');

module.exports = router;