import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

console.log('🚀 Building RentAgain 100% Identical Multi-Device Production Mirror...');

// Clean and recreate dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy all static desktop routes to dist
const desktopRoutes = [
  'index.html',
  'housing-packages/index.html',
  'cosigner/index.html',
  'verified-income/index.html',
  'instant-approval/index.html',
  'book-online/index.html',
  'book-consultation/index.html',
  'booking-calendar/housing-approval-consultation/index.html',
  'booking-calendar/car-approval-consultation/index.html'
];

let totalBytes = 0;
console.log('🖥️ Copying Desktop Pages...');
for (const p of desktopRoutes) {
  const src = path.join(rootDir, p);
  const dest = path.join(distDir, p);
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    const size = fs.statSync(dest).size;
    totalBytes += size;
    console.log(`  ✓ /${p} (${(size / 1024).toFixed(1)} KB)`);
  }
}

// Copy all mobile routes to dist/m
const mobileRoutes = [
  'm/index.html',
  'm/housing-packages/index.html',
  'm/cosigner/index.html',
  'm/verified-income/index.html',
  'm/instant-approval/index.html',
  'm/book-online/index.html',
  'm/book-consultation/index.html',
  'm/booking-calendar/housing-approval-consultation/index.html',
  'm/booking-calendar/car-approval-consultation/index.html'
];

console.log('📱 Copying Mobile Pages...');
for (const p of mobileRoutes) {
  const src = path.join(rootDir, p);
  const dest = path.join(distDir, p);
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    const size = fs.statSync(dest).size;
    totalBytes += size;
    console.log(`  ✓ /${p} (${(size / 1024).toFixed(1)} KB)`);
  }
}

// Copy public directory if exists
const publicDir = path.join(rootDir, 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
  console.log('  ✓ Copied public assets to dist');
}

console.log(`\n🎉 Mirror Build Complete! ${(totalBytes / (1024 * 1024)).toFixed(2)} MB across ${desktopRoutes.length + mobileRoutes.length} pages in dist/`);
