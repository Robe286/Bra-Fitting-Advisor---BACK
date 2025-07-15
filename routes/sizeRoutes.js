const express = require('express');
const router = express.Router();
const sizeController = require('../controllers/sizeController');

router.post('/calculate', sizeController.getBraSize);

// --- Se podría obtener la talla para otros productos ---

// router.post('/calculate', sizeController.getPijamaSize);
// router.post('/calculate', sizeController.getSockSize);
// router.post('/calculate') sizeController.getbikiniSize;

module.exports = router;