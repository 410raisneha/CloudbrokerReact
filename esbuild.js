const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./app/javascript/application.js'],  // Your main entry file
  bundle: true,
  outdir: './app/assets/builds',  // Output directory for bundled files
  loader: { '.js': 'jsx' },  // Use JSX loader for React components
}).catch(() => process.exit(1));
