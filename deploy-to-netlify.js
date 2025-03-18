const fs = require('fs');
const path = require('path');

// Make sure the dist folder exists
if (!fs.existsSync('dist')) {
  console.error('Error: dist folder not found. Run npm run build first!');
  process.exit(1);
}

// Copy netlify.toml to the root if it doesn't exist
if (!fs.existsSync('netlify.toml')) {
  console.log('Creating netlify.toml...');
  fs.copyFileSync('netlify.toml', path.join('dist', 'netlify.toml'));
}

// Create _headers file in dist folder if it doesn't exist
if (!fs.existsSync(path.join('dist', '_headers'))) {
  console.log('Creating _headers file in dist folder...');
  
  const headersContent = `/*.js
  Content-Type: text/javascript

/*.mjs
  Content-Type: text/javascript

/*.css
  Content-Type: text/css`;
  
  fs.writeFileSync(path.join('dist', '_headers'), headersContent);
}

console.log('Deployment files are ready. You can now deploy the dist folder to Netlify.'); 