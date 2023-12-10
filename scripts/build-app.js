const esbuild = require('esbuild');
esbuild
    .build({
        entryPoints: ['./app/main.tsx'],
        outfile: './docs/main.js',
        bundle: true,
        minify: true,
        treeShaking: true,
    })
    .catch(() => process.exit(1));
