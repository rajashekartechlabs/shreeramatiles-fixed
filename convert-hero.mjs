import sharp from 'sharp';

const src = 'C:/Users/Rajashekarreddyhs/.gemini/antigravity/brain/364ca72a-5a9b-4f51-ad2b-41fdb099380c/.user_uploaded/media_1789691474747.jpg';
const meta = await sharp(src).metadata();
console.log('Source image:', JSON.stringify(meta));

// Write fresh with higher quality to distinguish from old
const dest = 'public/images/hero-desktop.webp';
const info = await sharp(src)
  .webp({ quality: 85, effort: 6 })
  .toFile(dest);

console.log('Output:', JSON.stringify(info));
