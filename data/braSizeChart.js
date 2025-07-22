/*
- TABLA DE CORRESPONDENCIA BUSTO-TÓRAX -> TALLA DE SUJETADOR

  - Copas: A, B, C, D, E, F
  - Tallas: 75, 80, 85, 90, 95, 100, 105, 110, 115, 120
  - underMin / underMax → contorno de tórax (bajo pecho)
  - bustMin  / bustMax → contorno de busto (pecho)
  - size + cup → talla resultante

  Para los rangos con condición < 79, < 81, … se establece el límite superior con decimales (.9),
  para que el intervalo sea [min, max] inclusivo y no solape.

*/

module.exports = [

  // — 75 —
  { underMin: 58, underMax: 62, bustMin: 72, bustMax: 75,     size: '75', cup: 'A' },
  { underMin: 58, underMax: 62, bustMin: 74, bustMax: 76,     size: '75', cup: 'B' },

  // — 80 —
  { underMin: 63, underMax: 67, bustMin: 77, bustMax: 78.9,   size: '80', cup: 'A', equiv: '75B' },
  { underMin: 63, underMax: 67, bustMin: 79, bustMax: 80.9,   size: '80', cup: 'B' },
  { underMin: 63, underMax: 67, bustMin: 81, bustMax: 83,     size: '80', cup: 'C' },

  // — 85 —
  { underMin: 68, underMax: 72, bustMin: 82, bustMax: 83.9,   size: '85', cup: 'A', equiv: '80B' },
  { underMin: 68, underMax: 72, bustMin: 84, bustMax: 85.9,   size: '85', cup: 'B' },
  { underMin: 68, underMax: 72, bustMin: 86, bustMax: 87.9,   size: '85', cup: 'C' },
  { underMin: 68, underMax: 72, bustMin: 88, bustMax: 89.9,   size: '85', cup: 'D' },
  { underMin: 68, underMax: 72, bustMin: 90, bustMax: 91.9,   size: '85', cup: 'E' },
  { underMin: 68, underMax: 72, bustMin: 92, bustMax: 93.9,   size: '85', cup: 'F' },

  // — 90 —
  { underMin: 73, underMax: 77, bustMin: 87, bustMax: 88.9,   size: '90', cup: 'A', equiv: '85B' },
  { underMin: 73, underMax: 77, bustMin: 89, bustMax: 90.9,   size: '90', cup: 'B' },
  { underMin: 73, underMax: 77, bustMin: 91, bustMax: 92.9,   size: '90', cup: 'C' },
  { underMin: 73, underMax: 77, bustMin: 93, bustMax: 94.9,   size: '90', cup: 'D' },
  { underMin: 73, underMax: 77, bustMin: 95, bustMax: 96.9,   size: '90', cup: 'E' },
  { underMin: 73, underMax: 77, bustMin: 97, bustMax: 98.9,   size: '90', cup: 'F' },

  // — 95 —
  { underMin: 78, underMax: 82, bustMin: 92, bustMax: 93.9,   size: '95', cup: 'A', equiv: '90B' },
  { underMin: 78, underMax: 82, bustMin: 94, bustMax: 95.9,   size: '95', cup: 'B' },
  { underMin: 78, underMax: 82, bustMin: 96, bustMax: 97.9,   size: '95', cup: 'C' },
  { underMin: 78, underMax: 82, bustMin: 98, bustMax: 99.9,   size: '95', cup: 'D' },
  { underMin: 78, underMax: 82, bustMin: 100, bustMax: 101.9, size: '95', cup: 'E' },
  { underMin: 78, underMax: 82, bustMin: 102, bustMax: 103.9, size: '95', cup: 'F' },

  // — 100 —
  { underMin: 83, underMax: 87, bustMin: 99, bustMax: 100.9,  size: '100', cup: 'B' },
  { underMin: 83, underMax: 87, bustMin: 101, bustMax: 102.9, size: '100', cup: 'C' },
  { underMin: 83, underMax: 87, bustMin: 103, bustMax: 104.9, size: '100', cup: 'D' },
  { underMin: 83, underMax: 87, bustMin: 105, bustMax: 106.9, size: '100', cup: 'E' },
  { underMin: 83, underMax: 87, bustMin: 107, bustMax: 108.9, size: '100', cup: 'F' },

  // — 105 —
  { underMin: 88, underMax: 92, bustMin: 104, bustMax: 105.9, size: '105', cup: 'B' },
  { underMin: 88, underMax: 92, bustMin: 106, bustMax: 107.9, size: '105', cup: 'C' },
  { underMin: 88, underMax: 92, bustMin: 108, bustMax: 109.9, size: '105', cup: 'D' },
  { underMin: 88, underMax: 92, bustMin: 110, bustMax: 111.9, size: '105', cup: 'E' },
  { underMin: 88, underMax: 92, bustMin: 112, bustMax: 113.9, size: '105', cup: 'F' },

  // — 110 —
  { underMin: 93, underMax: 97, bustMin: 109, bustMax: 110.9, size: '110', cup: 'B' },
  { underMin: 93, underMax: 97, bustMin: 111, bustMax: 112.9, size: '110', cup: 'C' },
  { underMin: 93, underMax: 97, bustMin: 113, bustMax: 114.9, size: '110', cup: 'D' },
  { underMin: 93, underMax: 97, bustMin: 115, bustMax: 116.9, size: '110', cup: 'E' },
  { underMin: 93, underMax: 97, bustMin: 117, bustMax: 118.9, size: '110', cup: 'F' },

  // — 115 —
  { underMin: 98, underMax: 102, bustMin: 114, bustMax: 115.9, size: '115', cup: 'B' },
  { underMin: 98, underMax: 102, bustMin: 116, bustMax: 117.9, size: '115', cup: 'C' },
  { underMin: 98, underMax: 102, bustMin: 118, bustMax: 119.9, size: '115', cup: 'D' },
  { underMin: 98, underMax: 102, bustMin: 120, bustMax: 121.9, size: '115', cup: 'E' },
  { underMin: 98, underMax: 102, bustMin: 122, bustMax: 123.9, size: '115', cup: 'F' },

  // — 120 —
  { underMin: 103, underMax: 107, bustMin: 119, bustMax: 120.9, size: '120', cup: 'B' },
  { underMin: 103, underMax: 107, bustMin: 121, bustMax: 122.9, size: '120', cup: 'C' },
  { underMin: 103, underMax: 107, bustMin: 123, bustMax: 124.9, size: '120', cup: 'D' },
  { underMin: 103, underMax: 107, bustMin: 125, bustMax: 126.9, size: '120', cup: 'E' },
  { underMin: 103, underMax: 107, bustMin: 127, bustMax: 128.9, size: '120', cup: 'F' }

];

