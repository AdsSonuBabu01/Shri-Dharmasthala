import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const svgPath = path.join(publicDir, 'favicon.svg');
const logoLightPath = path.join(publicDir, 'logo-light.svg');
const logoDarkPath = path.join(publicDir, 'logo-dark.svg');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const faviconSizes = [
  { name: 'favicon-16x16.png', width: 16, height: 16 },
  { name: 'favicon-32x32.png', width: 32, height: 32 },
  { name: 'favicon-48x48.png', width: 48, height: 48 },
  { name: 'favicon-64x64.png', width: 64, height: 64 },
  { name: 'favicon-96x96.png', width: 96, height: 96 },
  { name: 'apple-touch-icon.png', width: 180, height: 180 },
  { name: 'android-chrome-192x192.png', width: 192, height: 192 },
  { name: 'android-chrome-512x512.png', width: 512, height: 512 },
  { name: 'icon.png', width: 192, height: 192 }
];

const logoOutputs = [
  { name: 'logo.png', src: logoLightPath, width: 512, height: 512, format: 'png' },
  { name: 'logo.webp', src: logoLightPath, width: 512, height: 512, format: 'webp' },
  { name: 'logo-header.png', src: logoLightPath, width: 256, height: 256, format: 'png' },
  { name: 'logo-footer.png', src: logoDarkPath, width: 256, height: 256, format: 'png' }
];

async function generate() {
  console.log('Generating complete favicon set from SVG...');

  for (const { name, width, height } of faviconSizes) {
    const outputPath = path.join(publicDir, name);
    await sharp(svgPath)
      .resize(width, height)
      .png()
      .toFile(outputPath);
    console.log(`Generated favicon: ${name} (${width}x${height})`);
  }

  for (const { name, src, width, height, format } of logoOutputs) {
    const outputPath = path.join(publicDir, name);
    if (format === 'webp') {
      await sharp(src)
        .resize(width, height)
        .webp({ quality: 95 })
        .toFile(outputPath);
    } else {
      await sharp(src)
        .resize(width, height)
        .png()
        .toFile(outputPath);
    }
    console.log(`Generated logo asset: ${name} (${width}x${height})`);
  }

  // Generate favicon.ico from 32x32 PNG buffer
  const icoPath = path.join(publicDir, 'favicon.ico');
  const png32Buffer = await sharp(svgPath)
    .resize(32, 32)
    .png()
    .toBuffer();

  // Create standard ICO file header and directory for a 32x32 PNG icon
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Image type (1 = ICO)
  header.writeUInt16LE(1, 4); // Number of images

  const directory = Buffer.alloc(16);
  directory.writeUInt8(32, 0); // Width
  directory.writeUInt8(32, 1); // Height
  directory.writeUInt8(0, 2);  // Color count (0 = >=256)
  directory.writeUInt8(0, 3);  // Reserved
  directory.writeUInt16LE(1, 4); // Color planes
  directory.writeUInt16LE(32, 6); // Bits per pixel
  directory.writeUInt32LE(png32Buffer.length, 8); // Size of image data
  directory.writeUInt32LE(22, 12); // Offset of image data (6 header + 16 dir = 22)

  const icoBuffer = Buffer.concat([header, directory, png32Buffer]);
  fs.writeFileSync(icoPath, icoBuffer);
  console.log('Generated: favicon.ico (32x32)');

  // Make sure logo.svg exists as copy of logo-light.svg
  fs.copyFileSync(logoLightPath, path.join(publicDir, 'logo.svg'));

  console.log('All logo and favicon assets generated successfully!');
}

generate().catch((err) => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
