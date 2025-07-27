const express = require('express');
const router = express.Router();
const sizeController = require('../controllers/sizeController');

router.post('/calculate-bra', sizeController.getBraSize);

// --- Endpoints para obtener la talla de otros productos A FUTURO ---

// router.post('/calculate-sock', sizeController.getSockSize);
// router.post('/calculate-pijama', sizeController.getPijamaSize);
// router.post('/calculate-bikini', sizeController.getbikiniSize);

module.exports = router;