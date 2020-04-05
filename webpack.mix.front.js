const mix = require('laravel-mix');

mix.js('resources/front/js/app.js', 'public/js')
    .sass('resources/front/sass/app.scss', 'public/css')


    .options({
        processCssUrls: false
    })

    .webpackConfig({ devtool: "inline-source-map" })
    .sourceMaps()
    // .copyDirectory('resources/video', 'public/video')


    .browserSync({
        proxy: 'http://localhost:8000',
        host: 'localhost',
        open: true,
        files: [
            // 'app/**/*.php',
            'resources/views/front/**/*.php',
            'resources/front/js/**/*.js',
            'resources/front/scss/**/*.scss',
            'public/front/**/css/*.css',
            'public/front/**/js/*.js'
        ]
    });
