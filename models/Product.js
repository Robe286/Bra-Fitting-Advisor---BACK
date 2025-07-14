const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  description: { type: String, required: true },
  image: { type: String, required: true },
  size: { type: Number, required: true, min: 80 },
  cup: { type: String, required: true },
  color: { type: String, required: true },
  category: { type: String, required: true },
  stuffed: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true, min: 0 }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


/*
Product → Modelo para guardar los productos en BBDD
descripción: { type: String, required: true },
talla: { type: String, required: true },
color: { type: String, required: true }
categoria: { type: String, required: true },
relleno: { type: String, required: true },
marca: { type: String, required: true },
precio: { type: Number, required: true, min: 0 }

*/