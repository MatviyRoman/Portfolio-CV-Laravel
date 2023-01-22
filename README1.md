# Portfolio-CV-Laravel

Portfolio CV Laravel

PHP >= 8.0
Apache >= 2.4

Composer

1. composer install
2. composer update

Install Laravel

1. composer create-project laravel/laravel:^8.0 example-app
2. cd example-app
3. php artisan serve
4. .env change config

AUTH

1. composer require laravel/breeze:1.9.2
2. php artisan breeze:install --dark
3. npm install
4. npm run dev
5. php artisan migrate

WARNING in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)

1. npm install autoprefixer@10.4.5 --save-exact

"dev": "npm run development",

"devv": "npm run development",

"dev": "npm run development",

"development": "mix",

"watch": "mix watch",

"watch-poll": "mix watch -- --watch-options-poll=1000",

"hot": "mix watch --hot",

"prod": "npm run production",

"production": "mix --production"

.htaccess

```php
RewriteEngine On
RewriteCond %{REQUEST_URI} !^/public/
RewriteRule ^(.*)$ /public/$1 [L,QSA]
```
