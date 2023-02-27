const mix = require('laravel-mix');

mix.js('app.js', 'index.js');
mix.sass('app.scss', 'index.css');
mix.options({ manifest: false });
