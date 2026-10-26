import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

console.log('🚀 Building RentAgain static multi-page site for production...');

// Clean and recreate dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// List of HTML entry pages to include
const pages = [
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
for (const pageRel of pages) {
  const src = path.join(rootDir, pageRel);
  const dest = path.join(distDir, pageRel);
  
  if (!fs.existsSync(src)) {
    console.error(`❌ Missing source page: ${src}`);
    process.exit(1);
  }

  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(src, dest);
  const size = fs.statSync(dest).size;
  totalBytes += size;
  console.log(`  ✓ ${pageRel} (${(size / 1024).toFixed(1)} KB)`);
}

// Copy public directory if exists
const publicDir = path.join(rootDir, 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
  console.log('  ✓ Copied public assets to dist');
}

console.log(`\n🎉 Build complete! ${(totalBytes / (1024 * 1024)).toFixed(2)} MB output across ${pages.length} pages in dist/`);
