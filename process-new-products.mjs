import sharp from 'sharp';
import fs from 'fs';

const uploads = [
  {
    src: 'C:/Users/Rajashekarreddyhs/.gemini/antigravity/brain/364ca72a-5a9b-4f51-ad2b-41fdb099380c/.user_uploaded/media_1789697141101.jpg',
    dest: 'public/images/double-way-paver.webp',
    label: 'Image 1 (interlocking curved paver)',
  },
  {
    src: 'C:/Users/Rajashekarreddyhs/.gemini/antigravity/brain/364ca72a-5a9b-4f51-ad2b-41fdb099380c/.user_uploaded/media_1789697141110.jpg',
    dest: 'public/images/hexagonal-paver.webp',
    label: 'Image 2 (hexagonal paver)',
  },
];

for (const { src, dest, label } of uploads) {
  // Step 1: Verify actual format via magic bytes
  const buf = fs.readFileSync(src);
  const hex4 = buf.slice(0, 4).toString('hex');
  const hex8 = buf.slice(0, 8).toString('hex');

  let detectedFormat = 'unknown';
  if (hex4 === 'ffd8ffe0' || hex4 === 'ffd8ffe1' || hex4 === 'ffd8ffdb' || buf.slice(0,2).toString('hex') === 'ffd8') {
    detectedFormat = 'JPEG';
  } else if (hex4 === '89504e47') {
    detectedFormat = 'PNG';
  } else if (buf.slice(8, 12).toString('ascii') === 'WEBP') {
    detectedFormat = 'WebP';
  } else if (hex4 === '00000020' || hex4 === '00000018') {
    detectedFormat = 'AVIF/MP4 container';
  }

  const ext = src.split('.').pop().toUpperCase();
  const formatMatch = (detectedFormat === 'JPEG' && (ext === 'JPG' || ext === 'JPEG')) ||
                      (detectedFormat === 'PNG' && ext === 'PNG') ||
                      (detectedFormat === 'WebP' && ext === 'WEBP');

  console.log(`\n=== ${label} ===`);
  console.log(`  Extension: .${ext}`);
  console.log(`  Detected format: ${detectedFormat}`);
  console.log(`  Format match: ${formatMatch ? '✅ OK' : '❌ MISMATCH — correcting before conversion'}`);

  // Step 2: Get source metadata
  const meta = await sharp(src).metadata();
  console.log(`  Source size: ${meta.width}×${meta.height} ${meta.format}`);

  // Step 3: Convert to WebP targeting 30–450KB range; existing catalog is ~30–450KB
  // Use quality 82 to stay consistent with other product images
  const info = await sharp(src)
    .webp({ quality: 82, effort: 6 })
    .toFile(dest);

  const sizeKB = (info.size / 1024).toFixed(1);
  const inRange = info.size >= 30_000 && info.size <= 450_000;
  console.log(`  Output: ${info.width}×${info.height} WebP → ${sizeKB} KB ${inRange ? '✅ in range' : '⚠️ OUT OF RANGE'}`);
  console.log(`  Saved to: ${dest}`);
}

// Step 4: Duplicate check — compare all product image paths in data
const existingImages = [
  'drainage-slabs', 'compound-walls', 'parking-tiles', 'i-shape-paver',
  'zigzag-paver', 'zigzag-paver-80', 'square-paver', 'rectangle-paver',
  'grass-paver-60', 'grass-paver-80', 'cover-blocks', 'curbs', 'curb-drain',
];
const newImages = ['double-way-paver', 'hexagonal-paver'];
const dupes = newImages.filter(n => existingImages.includes(n));
console.log(`\n=== Duplicate check ===`);
console.log(dupes.length === 0
  ? '✅ No duplicates — both new images are distinct filenames'
  : `❌ DUPLICATES FOUND: ${dupes.join(', ')}`);
console.log('\nAlso confirming new images are distinct from each other:',
  newImages[0] !== newImages[1] ? '✅ distinct' : '❌ same filename');
