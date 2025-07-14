const Product = require('../models/Product.js');

const productControllers = {
  
  async getProducts (req, res) {
    try {
    const bras = await Product.find();
    if (!bras) res.status(404).send({message: 'Products not found'});
    res.json(bras);

    } catch (error) {
      res
      .status(500)
      .send({message: 'There was a problem getting the products'});
    }
  },

  async createProduct (req, res) {
    try {
      const bra = await Product.create({...req.body});
      if (!bra) res.status(404).send({message: 'Product not found'});
      res.status(200).json(bra);
      
    } catch (error) {
      res.
      status(500)
      send({message: 'There was a problem creating the product'});
    }
  },

  async getProduct (req, res) {
    try {
      const { id } = req.params
      const bra = await Product.findById(_id = id);
      if (!bra) res.status(404).send({message: 'Product not found'});
      res.json(bra);

    } catch (error) {
      res.
      status(500)
      send({message: 'There was a problem getting the product'});
    }
  },

  async updateProduct (req, res) {
    try {
      const { id } = req.params
      const bra = await Product.findByIdAndUpdate(_id = id, {...req.body}, {new: true});
      if (!bra) res.status(404).send({message: 'Product not found'});
      res.status(200).json(bra);

    } catch (error) {
      res.
      status(500)
      send({message: 'There was a problem updating the product'});
    }
  },

  async deleteProduct (req, res) {
    try {
      const { id } = req.params
      const bra = await Product.findByIdAndDelete(_id = id);
      if (!bra) res.status(404).send({message: 'Product not found'});
      res.json({message: 'Removed Product'});

    } catch (error) {
      res.
      status(500)
      send({message: 'There was a problem deleting the product'});
    }
  }
}

module.exports = productControllers;

/*
Controladores:
  - productController.js
      getProducts/showProducts
      getProductById
      createProduct
      updateProduct
      deleteProduct
      filterProducts
      calculateSize
*/