const braSizeChart = require('../data/braSizeChart.js');

function isInRange (value, min, max) {
  return value >= min && value <= max;
}

function calculateBraSize (bust, under) {

  const sizeMatch = braSizeChart.find(entry =>
    isInRange(bust, entry.bustMin, entry.bustMax)
    &&
    isInRange(under, entry.underMin, entry.underMax)
  );
  return sizeMatch ? `Tu talla perfecta: ${sizeMatch.size}${sizeMatch.cup}`
  : 'Sin correspondencia, no cubre un rango lógico. Revisa tus medidas e introducelas de nuevo';
}

module.exports = calculateBraSize;