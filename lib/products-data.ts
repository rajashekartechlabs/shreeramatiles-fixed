export interface Product {
  id: number | string
  name: string
  price: string
  description: string
  image: string
  category?: string
  imageClassName?: string
}

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Drainage Slab',
    price: '₹80 / Sq.ft',
    description: 'Heavy-duty drainage slabs for residential and commercial drainage systems.',
    image: '/images/drainage-slabs.webp',
    category: 'Drainage',
    imageClassName: 'object-contain p-3',
  },
  {
    id: 2,
    name: 'Readymade Compound Wall',
    price: '₹90 / Sq.ft',
    description: 'Strong precast compound wall panels with quick installation.',
    image: '/images/compound-walls.webp',
    category: 'Precast Walls',
    imageClassName: 'object-cover object-center',
  },
  {
    id: 4,
    name: 'I Shape Paver (60 mm)',
    price: '₹40 / Sq.ft',
    description: 'Premium I-shaped concrete paver tiles for modern designs.',
    image: '/images/i-shape-paver.webp',
    category: 'Pavers',
  },
  {
    id: 5,
    name: 'Zig Zag Paver (60 mm)',
    price: '₹40 / Sq.ft',
    description: 'Decorative zig zag paver tiles for attractive patterns.',
    image: '/images/zigzag-paver.webp',
    category: 'Pavers',
  },
  {
    id: 6,
    name: 'Zig Zag Paver (80 mm)',
    price: '₹50 / Sq.ft',
    description: 'Heavy-duty zig zag paver tiles with enhanced thickness.',
    image: '/images/zigzag-paver-80.webp',
    category: 'Pavers',
  },
  {
    id: 7,
    name: 'Square Paver (8×8, 60 mm)',
    price: '₹45 / Sq.ft',
    description: 'Classic square paver tiles for versatile applications.',
    image: '/images/square-paver.webp',
    category: 'Pavers',
  },
  {
    id: 8,
    name: 'Rectangle Paver (4×8, 60 mm)',
    price: '₹48 / Sq.ft',
    description: 'Rectangular paver tiles for linear designs and driveways.',
    image: '/images/rectangle-paver.webp',
    category: 'Pavers',
  },
  {
    id: 9,
    name: 'Grass Paver (60 mm)',
    price: '₹60 / Sq.ft',
    description: 'Eco-friendly grass paver tiles for green parking and landscaping.',
    image: '/images/grass-paver-60.webp',
    category: 'Grass Pavers',
  },
  {
    id: 10,
    name: 'Grass Paver (80 mm)',
    price: '₹70 / Sq.ft',
    description: 'Heavy-duty grass paver tiles for high-traffic areas.',
    image: '/images/grass-paver-80.webp',
    category: 'Grass Pavers',
  },
  {
    id: 11,
    name: 'Cover Block',
    price: '₹140 / 100 Pieces',
    description: 'Protective cover blocks for various construction applications.',
    image: '/images/cover-blocks.webp',
    category: 'Precast Accessories',
  },
  {
    id: 12,
    name: 'Curb',
    price: '₹170 / Piece',
    description: 'Precast concrete curb elements for landscaping and boundaries.',
    image: '/images/curbs.webp',
    category: 'Curbs & Drains',
  },
  {
    id: 13,
    name: 'Curb Saucer Drain',
    price: '₹170 / Piece',
    description: 'Integrated curb and drainage solution for efficient water management.',
    image: '/images/curb-drain.webp',
    category: 'Curbs & Drains',
  },
  {
    id: 14,
    name: 'Double Way Paver',
    // Price not yet decided — leave blank; do not display a placeholder number.
    price: '',
    description: 'Interlocking double-way concrete paver tiles for driveways and pathways.',
    image: '/images/double-way-paver.webp',
    category: 'Pavers',
  },
  {
    id: 15,
    name: 'Hexagonal Paver',
    price: '₹45 / Sq.ft',
    description: 'Classic hexagonal concrete paver tiles available in multiple colours for decorative paving.',
    image: '/images/hexagonal-paver.webp',
    category: 'Pavers',
  },
  {
    id: 16,
    name: 'Square Tile',
    price: '₹35 / Sq.ft',
    description: 'Classic plain square design paver tiles, available in grey and red.',
    image: '/images/square-tile.webp',
    category: 'Pavers',
  },
  {
    id: 17,
    name: 'Designer Tile',
    price: '₹35 / Sq.ft',
    description: 'Decorative floral pattern paver tiles, available in grey and red.',
    image: '/images/designer-tile.webp',
    category: 'Pavers',
  },
  {
    id: 18,
    name: 'Checker Tile',
    price: '₹35 / Sq.ft',
    description: 'Textured checker-pattern paver tiles, available in grey and red.',
    // TODO: The image angle for this product is a wide plaza shot, which is inconsistent 
    // with the close diagonal walkway angle of Square Tile and Designer Tile. 
    // Regenerate this image to match the tight framing once the image generation quota resets.
    image: '/images/checker-tile.webp',
    category: 'Pavers',
  },
]
