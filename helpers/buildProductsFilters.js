//const {filterByExactMatch} = require('./filters.js');
//const {filterByBrand} = require('./filters.js');
//const {filterByPrice} = require('./filters.js');

// ---- Filtros para consultas MongoDB (productos) ----

// Filtra por coincidencia exacta de un campo

function filterByExactMatch (field, value) {
  if (!value) return {};
  return { [field]: value } // Devuelve un objeto con el campo exacto y su valor
}
/*
// Filtra por una o varias marcas

function filterByBrand (brands) {
  const isArray = Array.isArray(brands); 
  if (!isArray || brands.length === 0) {
   return {}; 
  }
  return { brand: { $in: brands } }; // Devuelve un objeto que incluye las marcas escogidas
}

// Filtra por rango de precios

function filterByPrice (priceMin, priceMax) {
  const priceFilter = {};
  
  if (priceMin != null) {
    priceFilter.$gte = priceMin; // >= precio mínimo 
  }
  if (priceMax != null) {
    priceFilter.$lte = priceMax; // <= precio máximo
  }
  return Object.keys(priceFilter).length ? { price} : {};
}
*/

function buildProductsFilters (body = {}) {
  const {
    size,
    cup,
    category,
    stuffed,
    brand,
    priceMin,
    priceMax
  } = body;

  return {
    ...filterByExactMatch('size', size),
    ...filterByExactMatch('cup', cup),
    ...filterByExactMatch('category', category),
    ...filterByExactMatch('stuffed', stuffed),
    //...filterByBrand(brand),
    //...filterByPrice(priceMin, priceMax)
  };
}
  
module.exports = buildProductsFilters;