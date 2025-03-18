// This is a dedicated build script for Netlify deployment
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Netlify-specific build process...');

// 1. Run the regular build
console.log('Building the application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// 2. Create the dist directory if it doesn't exist
const distDir = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('Created dist directory');
}

// Ensure the public directory exists and copy files from it
const publicDir = path.resolve(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  console.log('Copying files from public directory...');
  // This is a simplified approach - in a real scenario you might want to use fs-extra or similar
  const files = fs.readdirSync(publicDir);
  files.forEach(file => {
    const src = path.join(publicDir, file);
    const dest = path.join(distDir, file);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${file} to dist`);
    }
  });
}

// 3. Create _headers file with comprehensive MIME types
console.log('Creating _headers file...');
const headersContent = `/*
  X-Content-Type-Options: nosniff

/*.js
  Content-Type: text/javascript

/*.mjs
  Content-Type: text/javascript

/*.ts
  Content-Type: text/javascript
  
/*.jsx
  Content-Type: text/javascript
  
/*.tsx
  Content-Type: text/javascript

/*.css
  Content-Type: text/css

/*.json
  Content-Type: application/json
  
/*.map
  Content-Type: application/json
`;

fs.writeFileSync(path.join(distDir, '_headers'), headersContent);
console.log('Created _headers file');

// 4. Create _redirects file for SPA routing
console.log('Creating _redirects file...');
fs.writeFileSync(path.join(distDir, '_redirects'), '/* /index.html 200');
console.log('Created _redirects file');

// 5. Create netlify.toml file
console.log('Creating netlify.toml configuration...');
const netlifyConfig = `[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"

[[headers]]
  for = "/*.js"
  [headers.values]
    Content-Type = "text/javascript"

[[headers]]
  for = "/*.mjs"
  [headers.values]
    Content-Type = "text/javascript"

[[headers]]
  for = "/*.css"
  [headers.values]
    Content-Type = "text/css"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`;

fs.writeFileSync('netlify.toml', netlifyConfig);
console.log('Created netlify.toml file');

console.log('Netlify build process completed successfully!'); 