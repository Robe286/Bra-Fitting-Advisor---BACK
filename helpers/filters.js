
// ---- Filtros para consultas MongoDB (productos) ----

// Filtra por coincidencia exacta de un campo

function filterByExactMatch (field, value) {
  if (!value) return {};
  return { [field]: value } // Devuelve un objeto con el campo exacto y su valor
}

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

module.exports = {
  filterByExactMatch,
  filterByBrand,
  filterByPrice
}