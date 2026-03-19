// ═══════════════════════════════════════════════════════════════════
// THE PRINT SHED — Filament Stock
//
// Edit this file to update what colours are available.
// Changes here automatically update the customer quote page
// and admin dashboard.
//
// Each spool needs:
//   colour   — display name customers will see
//   hex      — swatch colour (find codes at htmlcolorcodes.com)
//   material — e.g. 'PLA', 'PLA Matte', 'PLA Silk+', 'PETG'
//   inStock  — true = available, false = hidden from customers
//   special  — true = shows "Limited" badge (optional)
//
// To mark as out of stock: change inStock to false
// To add a colour: copy any line and update the fields
// To remove permanently: delete the line (and trailing comma)
// ═══════════════════════════════════════════════════════════════════

const FILAMENT_STOCK = [

  // ── PLA ─────────────────────────────────────────────────────────
  { colour: 'Black',           hex: '#1a1a1a',  material: 'PLA',       inStock: true  },
  { colour: 'White',           hex: '#f5f5f0',  material: 'PLA',       inStock: true  },
  { colour: 'Bone White',      hex: '#e8dcc8',  material: 'PLA Matte', inStock: true  },
  { colour: 'Grey',            hex: '#9e9e9e',  material: 'PLA',       inStock: true  },
  { colour: 'Grey Blue',       hex: '#536872',  material: 'PLA',       inStock: true  },
  { colour: 'Yellow',          hex: '#fec601',  material: 'PLA',       inStock: true  },
  { colour: 'Orange',          hex: '#e65100',  material: 'PLA',       inStock: true  },
  { colour: 'Caramel',         hex: '#c68642',  material: 'PLA',       inStock: true  },
  { colour: 'Tan',             hex: '#e8dbb7',  material: 'PLA',       inStock: true  },
  { colour: 'Chocolate Brown', hex: '#3d1c02',  material: 'PLA Matte', inStock: true  },
  { colour: 'Terracotta',      hex: '#e35336',  material: 'PLA',       inStock: true  },
  { colour: 'Pink',            hex: '#e91e8c',  material: 'PLA',       inStock: true  },
  { colour: 'Green',           hex: '#2e7d32',  material: 'PLA',       inStock: true  },
  { colour: 'Olive',           hex: '#68724d',  material: 'PLA',       inStock: true  },
  { colour: 'Turquoise',       hex: '#00b1b7',  material: 'PLA',       inStock: true  },
  { colour: 'Purple',          hex: '#6a1b9a',  material: 'PLA',       inStock: true  },

  // ── PLA Silk+ ────────────────────────────────────────────────────
  { colour: 'Silk Red',           hex: '#cc2200',  material: 'PLA Silk+', inStock: true, special: true },
  { colour: 'Silk Blue',          hex: '#488ac7',  material: 'PLA Silk+', inStock: true, special: true },
  { colour: 'Silk Gold',          hex: '#d4a843',  material: 'PLA Silk+', inStock: true, special: true },
  { colour: 'Silk Green',         hex: '#72bf6a',  material: 'PLA Silk+', inStock: true, special: true },
  { colour: 'Silk Mint',          hex: '#a8d8b9',  material: 'PLA Silk+', inStock: true, special: true },
  { colour: 'Silk Green/Blue Mix',hex: '#4aab9a',  material: 'PLA Silk+', inStock: true, special: true },
  { colour: 'Silk Silver',        hex: '#C0C0C0',  material: 'PLA Silk+', inStock: true, special: true },

  // ── PETG ─────────────────────────────────────────────────────────
  { colour: 'Black',                      hex: '#1a1a1a',  material: 'PETG', inStock: true },
  { colour: 'Silver',                     hex: '#ADADAD',  material: 'PETG', inStock: true },
  { colour: 'Translucent Blue',           hex: '#87CEFA',  material: 'PETG', inStock: true },

];
