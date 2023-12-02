const esbuild = require('esbuild');

esbuild.context({
    entryPoints: ['./docs/main.tsx'],
    bundle: true,
    outfile: './public/main.js',
    sourcemap: false,
    minify: true,
}).then((context) => {
    context
        .serve({ servedir: 'public', port: 3000 })
        .then(({ host, port }) => console.log(`Listen ${host}:${port}`))
        .catch(console.log);
});

