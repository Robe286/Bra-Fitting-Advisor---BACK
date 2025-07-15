const braSizeChart = require('../utils/braSizeChart.js');

function isInRange (value, min, max) {
  return value >= min && value <= max;
}

function calculateBraSize (bust, under) {

  const sizeMatch = braSizeChart.find(entry =>
    isInRange(bust, entry.bustMin, entry.bustMax) &&
    isInRange(under, entry.underMin, entry.underMax)
  );

  return sizeMatch ? sizeMatch.size : '';
}

module.exports = calculateBraSize;