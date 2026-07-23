<?php

use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes - TERRASEU Monolith
|--------------------------------------------------------------------------
*/

// Main Landing Page
Route::get('/', [LandingController::class, 'index'])->name('landing');

// Admin Auth Redirect
Route::get('/login', function () {
    return redirect('/admin/login');
})->name('login');
