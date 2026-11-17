
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// Original high-resolution photo and transparent cutout
const hi = sharp('../image.png');
const { width, height } = await hi.metadata();

if (!width || !height) {
  throw new Error('Could not read the dimensions of ../image.png');
}

// Extract the transparency mask from the cutout
const alpha = await sharp('../pic.png')
  .ensureAlpha()
  .extractChannel('alpha')
  .resize(width, height, { kernel: 'lanczos3' })
  .blur(0.8)
  .raw()
  .toBuffer();

// Read the original photo pixels
const rgb = await sharp('../image.png')
  .removeAlpha()
  .raw()
  .toBuffer();

// Combine original photo with transparency mask
const rgba = Buffer.alloc(width * height * 4);

for (let i = 0; i < width * height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}

const cutout = await sharp(rgba, {
  raw: { width, height, channels: 4 }
}).png().toBuffer();

// Generate optimized portrait sizes
for (const w of [1600, 1100, 720, 420]) {
  await sharp(cutout)
    .resize({ width: w, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 95 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Generate social sharing image
const portrait = await sharp(cutout)
  .resize({ height: 600, withoutEnlargement: true })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#07070a'
  }
})
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="78%" cy="45%" r="45%">
            <stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/>
            <stop offset="1" stop-color="#e5132b" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`)
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">JASWIN</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">FULL-STACK DEVELOPER • AI / ML • JAVA</text>
      </svg>`)
    }
  ])
  .jpeg({ quality: 90 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Images built successfully!');
