const mix = require('laravel-mix');

mix
    .js('resources/admin/js/admin.js', 'public/assets/admin/js')
    .sass('resources/admin/scss/app-admin.scss', 'public/assets/admin/css')



    .browserSync({
        proxy: 'http://localhost:8000',
        host: 'localhost',
        open: true,
        watchOptions: {
            usePolling: false
        },
        files: [
            // 'app/**/*.php',
            'resources/views/**/*.php',
            'public/js/**/*.js',
            'public/css/**/*.css',
            'public/assets/**/css/*.css',
            'public/assets/admin/js/*.js',
            'resources/docs/**/*.md'
        ]
    });
