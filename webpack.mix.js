const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('src/styles/app.scss', 'public/styles')
    .js('src/scripts/app.js', 'public/scripts')
    .extract(['vue', 'lodash'])
    .copy('src/static/*', 'public/static');

if (! mix.config.inProduction) {
    mix.sourceMaps()
        .browserSync({
            proxy: undefined,
            server: {
                index: 'index.html',
                baseDir: '',
                serveStaticOptions: {
                    extensions: ['html'],
                },
            },
        });
}

mix.setPublicPath('');
mix.setResourceRoot('src');
