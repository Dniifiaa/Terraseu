<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateHeroRequest;
use App\Models\Hero;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;

class HeroController extends Controller
{
    use ApiResponse;

    /**
     * Get active hero slider content.
     */
    public function index(): JsonResponse
    {
        $hero = Hero::where('is_active', true)->first();

        return $this->success($hero, 'Berhasil mengambil konfigurasi hero section.');
    }

    /**
     * Update hero slider settings.
     */
    public function update(UpdateHeroRequest $request, Hero $hero): JsonResponse
    {
        $hero->update($request->validated());

        return $this->success($hero, 'Berhasil memperbarui konfigurasi hero.');
    }
}
