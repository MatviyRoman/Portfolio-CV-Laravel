const mix = require('laravel-mix');

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

// mix.config.publicPath = "public_html";

//! public path
const public = 'public';

//! set path input => output
const patchInputCSS = 'resources/css';
const patchOutputCSS = public + '/css';

const patchInputJS = 'resources/js';
const patchOutputJS = public + '/js';

// window.$ = window.jQuery = require("jquery");

mix.copy(`${patchInputJS}/**/!(app.js)`, patchOutputJS);
mix.copy('resources/img/', public + '/img');
mix.copy('resources/svg/', public + '/svg');

mix.js(`${patchInputJS}/app.js`, patchOutputJS)
	// .js("resources/js/ie8.js", patchOutputJS)
	// .js("resources/js/init.js", patchOutputJS)
	// .js("resources/js/jquery.js", patchOutputJS)
	// .js("resources/js/modernizr.custom.js", patchOutputJS)
	// .js("resources/js/nicescroll.js", patchOutputJS)
	// .js("resources/js/owl-carousel.js", patchOutputJS)
	// .js("resources/js/typed.js", patchOutputJS)
	// .js("resources/js/waypoints.js", patchOutputJS)

	// .scripts(["resources/js/ie8.js", "resources/js/init.js"], patchOutputJS)

	.postCss(`${patchInputCSS}/base.css`, patchOutputCSS)
	.postCss(`${patchInputCSS}/style.css`, patchOutputCSS)
	.postCss(`${patchInputCSS}/owl-carousel.css`, patchOutputCSS)
	.postCss(`${patchInputCSS}/app.css`, patchOutputCSS, [
		require('tailwindcss'),
		require('autoprefixer'),
	]);

// mix.copy("public", "htdocs");
mix.copy('resources/views/dashboard/dist', 'public/dashboard/dist');
mix.copy('resources/views/dashboard/plugins', 'public/dashboard/plugins');
