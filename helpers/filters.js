
// ---- Filtros para consultas MongoDB (productos) ----

// Filtra por coincidencia exacta de un campo

function filterByExactMatch (field, value) {
  if (!value) return {};
  return { [field]: value } // Devuelve un objeto con el campo exacto y su valor
}

// Filtra por coincidencia si existen valores

function filterByInArray (field, values) {
  const isArray = Array.isArray(values); 
  if (!isArray || values.length === 0) {
   return {}; 
  }
  return { [field]: { $in: values } };
}

// Filtra por rango de precios

function filterByPrice (priceMin, priceMax) {
  const price = {};
  
  if (priceMin != null) {
    price.$gte = priceMin; // >= precio mínimo / límite inferior
  }
  if (priceMax != null) {
    price.$lte = priceMax; // <= precio máximo / límite superior
  }
  return Object.keys(price).length ? { price } : {};
}

module.exports = {
  filterByExactMatch,
  filterByInArray,
  filterByPrice
}