const Product = require('../models/Product.js');
const buildProductsFilters = require('../helpers/buildProductsFilters.js');

const productControllers = {
  
  async getProducts (req, res) {
    try {
    const bras = await Product.find();
    if (!bras) res.status(404).send({message: 'Productos no encontrados'});
    res.json(bras);

    } catch (error) {
      res
      .status(500)
      .send({message: 'Problema obteniendo los productos'});
    }
  },

  async createProduct (req, res) {
    try {
      const bra = await Product.create({...req.body});
      if (!bra) res.status(404).send({message: 'Producto no encontrado'});
      res.status(200).json(bra);
      
    } catch (error) {
      res.
      status(500)
      send({message: 'Problema creando el producto'});
    }
  },

  async getProduct (req, res) {
    try {
      const { id } = req.params
      const bra = await Product.findById(_id = id);
      if (!bra) res.status(404).send({message: 'Producto no encontrado'});
      res.json(bra);

    } catch (error) {
      res.
      status(500)
      send({message: 'Problema obteniendo el producto'});
    }
  },

  async updateProduct (req, res) {
    try {
      const { id } = req.params
      const bra = await Product.findByIdAndUpdate(_id = id, {...req.body}, {new: true});
      if (!bra) res.status(404).send({message: 'Producto no encontrado'});
      res.status(200).json(bra);

    } catch (error) {
      res.
      status(500)
      send({message: 'Problema actualizando el producto'});
    }
  },

  async deleteProduct (req, res) {
    try {
      const { id } = req.params
      const bra = await Product.findByIdAndDelete(_id = id);
      if (!bra) res.status(404).send({message: 'Producto no encontrado'});
      res.json({message: 'Producto eliminado'});

    } catch (error) {
      res.
      status(500)
      send({message: 'Problema eliminando el producto'});
    }
  },

  async filterProducts (req, res) {
    try {
      const filters = buildProductsFilters(req.body);
      const products = await Product.find(filters);
      if(!products) res.status(404).send({message: 'No se han encontrado productos para estas indicaciónes'});
      res.json({products});

    } catch (error) {
      res.
      status(500)
      send({message: 'Problema filtrando el producto'})
    }
  }

}

module.exports = productControllers;