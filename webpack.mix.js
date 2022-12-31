const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .js("resources/js/ie8.js", "public/js")
    .js("resources/js/init.js", "public/js")
    .js("resources/js/jquery.js", "public/js")
    .js("resources/js/modernizr.custom.js", "public/js")
    .js("resources/js/nicescroll.js", "public/js")
    .js("resources/js/owl-carousel.js", "public/js")
    .js("resources/js/typed.js", "public/js")
    .js("resources/js/waypoints.js", "public/js")

    // .scripts(["resources/js/ie8.js", "resources/js/init.js"], "public/js")

    .postCss("resources/css/base.css", "public/css")
    .postCss("resources/css/style.css", "public/css")
    .postCss("resources/css/owl-carousel.css", "public/css")
    .postCss("resources/css/app.css", "public/css", [
        //
    ]);
// mix.copy("resources/css/owl-carousel.css", "public/css");
mix.copy("resources/img/", "public/img");
mix.copy("resources/svg/", "public/svg");
