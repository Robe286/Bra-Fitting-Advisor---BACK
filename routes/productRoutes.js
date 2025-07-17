const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);
router.post('/filter', productController.filterProducts);
router.delete('/:id', productController.deleteProduct);

module.exports = router;





/*
Endpoints:
  - rutas principales/raíz:
      /api/products
      /api/auth
  - rutas secundarias/endpoints - products:
      get ‘ / ’ → Obtiene todos los productos
      get ‘ /:id ’ → Obtiene el detalle de un producto
      post ‘ / ‘ → Crea un producto
      put ‘ /:id ’ → Actualiza un producto
      delete ‘ /:id ’ → Elimina un producto
      post ‘ /filter ’ → Filtra productos
      post ‘ /calculate ’ → calcula la talla
  - rutas secundarias/endpoints - autenticación:
      post ‘ /register ’
      post ‘ /login ’
Controladores:
  - productController.js
      getProducts/showProducts
      getProductById
      createProduct
      updateProduct
      deleteProduct
      filterProducts
      calculateSize
  - authController.js
      register
      login
Middlewares:
  authMiddleware
*/