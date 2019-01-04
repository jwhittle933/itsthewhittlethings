<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('main');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::resources([
    'store' => 'StoreController',
    'blog' => 'BlogController',
    'comment' => 'CommentController'
]);