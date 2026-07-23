<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\DestinationController;
use App\Http\Controllers\Api\EmergencyContactController;
use App\Http\Controllers\Api\HeroController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API v1 Routes - TERRASEU
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    // Public Endpoints
    Route::get('/hero', [HeroController::class, 'index']);
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/destinations', [DestinationController::class, 'index']);
    Route::get('/destinations/{slug}', [DestinationController::class, 'show']);
    Route::get('/emergency-contacts', [EmergencyContactController::class, 'index']);

    // Admin / Protected Sanctum Routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::put('/destinations/{destination}', [DestinationController::class, 'update']);
        Route::put('/categories/{category}', [CategoryController::class, 'update']);
        Route::put('/hero/{hero}', [HeroController::class, 'update']);
    });
});
