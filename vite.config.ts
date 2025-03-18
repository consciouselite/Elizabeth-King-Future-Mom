import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-netlify-files',
      closeBundle() {
        // Create _headers file for Netlify
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
  Content-Type: text/css`;

        // Ensure dist directory exists
        const distDir = path.resolve(__dirname, 'dist');
        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true });
        }

        // Write headers file
        fs.writeFileSync(path.join(distDir, '_headers'), headersContent);
        
        // Create netlify.toml
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
    Content-Type = "text/css"`;
        
        fs.writeFileSync('netlify.toml', netlifyConfig);
        
        console.log('Generated Netlify configuration files');
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Generate JS files with the .mjs extension
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
});
