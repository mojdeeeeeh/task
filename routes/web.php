<?php


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('/tasks', 'TaskController');
Route::resource('/users', 'UserController');
Route::resource('/statuses', 'TaskStatusController');

