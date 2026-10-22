const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outputPublic = path.join(rootDir, ".output", "public");
const distDir = path.join(rootDir, "dist");

console.log("Running postbuild script...");

// Ensure output directories exist
if (!fs.existsSync(outputPublic)) {
  fs.mkdirSync(outputPublic, { recursive: true });
}

// 1. Copy index.html
if (fs.existsSync(path.join(rootDir, "index.html"))) {
  fs.copyFileSync(path.join(rootDir, "index.html"), path.join(outputPublic, "index.html"));
  console.log("Copied index.html to .output/public");
}

// 2. Copy 404.html
if (fs.existsSync(path.join(rootDir, "404.html"))) {
  fs.copyFileSync(path.join(rootDir, "404.html"), path.join(outputPublic, "404.html"));
  console.log("Copied 404.html to .output/public");
}

// 3. Copy .nojekyll
if (fs.existsSync(path.join(rootDir, ".nojekyll"))) {
  fs.copyFileSync(path.join(rootDir, ".nojekyll"), path.join(outputPublic, ".nojekyll"));
}

// 4. Copy public directory contents (sitemap.xml, robots.txt, site.webmanifest, favicons, _redirects)
const publicDir = path.join(rootDir, "public");
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, outputPublic, { recursive: true });
  console.log("Copied all public/ files (sitemap, robots, manifest, favicons) to .output/public");
}

// 5. Copy src/assets so relative paths in standalone index.html work
const srcAssets = path.join(rootDir, "src", "assets");
const destAssets = path.join(outputPublic, "src", "assets");
if (fs.existsSync(srcAssets)) {
  fs.mkdirSync(path.dirname(destAssets), { recursive: true });
  fs.cpSync(srcAssets, destAssets, { recursive: true });
  console.log("Copied src/assets to .output/public/src/assets");
}

// 6. Sync everything to dist/ (so Netlify's default 'dist' publish dir works out of the box)
fs.rmSync(distDir, { recursive: true, force: true });
fs.cpSync(outputPublic, distDir, { recursive: true });
console.log("Synchronized .output/public to dist/");
console.log("Postbuild finished successfully!");
