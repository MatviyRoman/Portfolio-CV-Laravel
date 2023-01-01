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

const patchOutputCSS = "public/css";
const patchOutputJS = "public/js";

// window.$ = window.jQuery = require("jquery");

mix.copy("resources/js/", patchOutputJS);

mix.js("resources/js/app.js", patchOutputJS)
    // .js("resources/js/ie8.js", patchOutputJS)
    // .js("resources/js/init.js", patchOutputJS)
    // .js("resources/js/jquery.js", patchOutputJS)
    // .js("resources/js/modernizr.custom.js", patchOutputJS)
    // .js("resources/js/nicescroll.js", patchOutputJS)
    // .js("resources/js/owl-carousel.js", patchOutputJS)
    // .js("resources/js/typed.js", patchOutputJS)
    // .js("resources/js/waypoints.js", patchOutputJS)

    // .scripts(["resources/js/ie8.js", "resources/js/init.js"], patchOutputJS)

    .postCss("resources/css/base.css", patchOutputCSS)
    .postCss("resources/css/style.css", patchOutputCSS)
    .postCss("resources/css/owl-carousel.css", patchOutputCSS)
    .postCss("resources/css/app.css", patchOutputCSS, [
        require("tailwindcss"),
        require("autoprefixer"),
    ]);
mix.copy("resources/img/", "public/img");
mix.copy("resources/svg/", "public/svg");
