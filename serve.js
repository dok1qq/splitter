const esbuild = require('esbuild');

esbuild.context({
    entryPoints: ['./app/main.tsx'],
    bundle: true,
    outfile: './docs/main.js',
    sourcemap: false,
    minify: true,
}).then((context) => {
    context
        .serve({ servedir: 'docs', port: 3000 })
        .then(({ host, port }) => console.log(`Listen ${host}:${port}`))
        .catch(console.log);
});

