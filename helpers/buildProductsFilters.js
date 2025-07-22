const {filterByExactMatch, filterByInArray, filterByPrice} = require('./filters.js');

function buildProductsFilters (body = {}) {
  const {
    size,
    cup,
    category,
    stuffed,
    brand,
    priceMin,
    priceMax,
    color
  } = body.filters || {};
  //console.log(body);

  return {
    ...filterByExactMatch('size', size),
    ...filterByExactMatch('cup', cup),
    ...filterByInArray('category', category),
    ...filterByInArray('stuffed', stuffed),
    ...filterByInArray('brand', brand),
    ...filterByInArray('color', color),
    ...filterByPrice(priceMin, priceMax)
  };
}
  
module.exports = buildProductsFilters;