import sharp from 'sharp';
import fs from 'fs';

const uploads = [
  {
    src: 'C:/Users/Rajashekarreddyhs/.gemini/antigravity/brain/364ca72a-5a9b-4f51-ad2b-41fdb099380c/square_tile_installed_1789705061604.jpg',
    dest: 'public/images/square-tile.webp',
    label: 'Square Tile',
  },
  {
    src: 'C:/Users/Rajashekarreddyhs/.gemini/antigravity/brain/364ca72a-5a9b-4f51-ad2b-41fdb099380c/designer_tile_installed_1789705090071.jpg',
    dest: 'public/images/designer-tile.webp',
    label: 'Designer Tile',
  },
  {
    src: 'C:/Users/Rajashekarreddyhs/.gemini/antigravity/brain/364ca72a-5a9b-4f51-ad2b-41fdb099380c/checker_tile_installed_1789705113579.jpg',
    dest: 'public/images/checker-tile.webp',
    label: 'Checker Tile',
  }
];

for (const { src, dest, label } of uploads) {
  // Verify format
  const buf = fs.readFileSync(src);
  const hex4 = buf.slice(0, 4).toString('hex');
  let detectedFormat = 'unknown';
  if (hex4 === 'ffd8ffe0' || hex4 === 'ffd8ffe1' || hex4 === 'ffd8ffdb' || buf.slice(0,2).toString('hex') === 'ffd8') {
    detectedFormat = 'JPEG';
  } else if (hex4 === '89504e47') {
    detectedFormat = 'PNG';
  } else if (buf.slice(8, 12).toString('ascii') === 'WEBP') {
    detectedFormat = 'WebP';
  }

  const ext = src.split('.').pop().toUpperCase();
  const formatMatch = (detectedFormat === 'JPEG' && (ext === 'JPG' || ext === 'JPEG')) ||
                      (detectedFormat === 'PNG' && ext === 'PNG') ||
                      (detectedFormat === 'WebP' && ext === 'WEBP');

  console.log(`\n=== ${label} ===`);
  console.log(`  Extension: .${ext}`);
  console.log(`  Detected format: ${detectedFormat}`);
  console.log(`  Format match: ${formatMatch ? '✅ OK' : '❌ MISMATCH'}`);

  // Convert to WebP targeting 30-450KB
  const info = await sharp(src)
    .webp({ quality: 80, effort: 6 })
    .toFile(dest);

  const sizeKB = (info.size / 1024).toFixed(1);
  const inRange = info.size >= 30_000 && info.size <= 450_000;
  console.log(`  Output: ${info.width}×${info.height} WebP → ${sizeKB} KB ${inRange ? '✅ in range' : '⚠️ OUT OF RANGE'}`);
  console.log(`  Saved to: ${dest}`);
}

const existingImages = [
  'drainage-slabs', 'compound-walls', 'parking-tiles', 'i-shape-paver',
  'zigzag-paver', 'zigzag-paver-80', 'square-paver', 'rectangle-paver',
  'grass-paver-60', 'grass-paver-80', 'cover-blocks', 'curbs', 'curb-drain',
  'double-way-paver', 'hexagonal-paver'
];
const newImages = ['square-tile', 'designer-tile', 'checker-tile'];
const dupes = newImages.filter(n => existingImages.includes(n));
console.log(`\n=== Duplicate check ===`);
console.log(dupes.length === 0
  ? '✅ No duplicates — all new images are distinct filenames'
  : `❌ DUPLICATES FOUND: ${dupes.join(', ')}`);
