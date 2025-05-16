const fs = require('fs');
const path = require('path');

// Read the main HTML file
const html = fs.readFileSync(path.join(__dirname, 'out/index.html'), 'utf8');

// Read all CSS files
const cssFiles = [
  path.join(__dirname, 'out/_next/static/css/efb073367770cd29.css')
];

let combinedCSS = '';
cssFiles.forEach(file => {
  if (fs.existsSync(file)) {
    combinedCSS += fs.readFileSync(file, 'utf8');
  }
});

// Read all JS files
const jsFiles = [
  path.join(__dirname, 'out/_next/static/chunks/webpack-fb9c51d5ecfdd723.js'),
  path.join(__dirname, 'out/_next/static/chunks/fd9d1056-cc48c28d170fddc2.js'),
  path.join(__dirname, 'out/_next/static/chunks/69-c7efea4b65083e7f.js'),
  path.join(__dirname, 'out/_next/static/chunks/main-app-a52d80a484724ced.js'),
  path.join(__dirname, 'out/_next/static/chunks/749-8ce4d33fe0e5fb11.js'),
  path.join(__dirname, 'out/_next/static/chunks/app/page-89224c2bd0be4d49.js'),
  path.join(__dirname, 'out/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js')
];

let combinedJS = '';
jsFiles.forEach(file => {
  if (fs.existsSync(file)) {
    combinedJS += fs.readFileSync(file, 'utf8');
  }
});

// Create the combined HTML
let combinedHTML = html
  .replace(/<link[^>]*>/g, '') // Remove all link tags
  .replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/g, '') // Remove all script tags with src
  .replace('</head>', `<style>${combinedCSS}</style></head>`)
  .replace('</body>', `<script>${combinedJS}</script></body>`);

// Set your base path
const basePath = '/devopsmariocom';

// Fix asset URLs in the HTML
let fixedHTML = combinedHTML
  // Fix _next/static and /_next/ to include basePath
  .replace(/(src|href)="\/_next\//g, `$1="${basePath}/_next/`)
  // Fix root-level static assets (e.g. /DevOpsMario-Logo-Tail.svg)
  .replace(/(src|href)="\/(?!devopsmariocom|_next|https?:|#)/g, `$1="${basePath}/`);

// Write the combined file
fs.writeFileSync(path.join(__dirname, 'out/combined.html'), fixedHTML);

console.log('Combined file created at out/combined.html'); 