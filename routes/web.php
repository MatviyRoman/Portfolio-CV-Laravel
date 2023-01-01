<?php

use Illuminate\Support\Facades\Route;
use Carbon\Carbon as Carbon;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $dateOfBirth = '1987-09-09';
    $years = Carbon::parse($dateOfBirth)->age;

    $res       = [];
    $res['name'] = 'Roman Matvii';
    $res['dob_years'] = $years;
    $res['dob_date'] = str_replace('-', ' ', $dateOfBirth);

    return view('index', $res);
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
