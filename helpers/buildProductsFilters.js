const {filterByExactMatch, filterByBrand, filterByPrice} = require('./filters.js');

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
    ...filterByBrand(brand),
    ...filterByPrice(priceMin, priceMax)
  };
}
  
module.exports = buildProductsFilters;