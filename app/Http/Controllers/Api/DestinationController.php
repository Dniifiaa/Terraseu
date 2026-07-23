<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateDestinationRequest;
use App\Models\Destination;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;

class DestinationController extends Controller
{
    use ApiResponse;

    /**
     * Get all active destinations with category relations.
     */
    public function index(): JsonResponse
    {
        $destinations = Destination::with('category')
            ->where('is_active', true)
            ->orderBy('order', 'asc')
            ->get();

        return $this->success($destinations, 'Berhasil mengambil data destinasi wisata.');
    }

    /**
     * Get detail destination by slug.
     */
    public function show(string $slug): JsonResponse
    {
        $destination = Destination::with('category')
            ->where('slug', $slug)
            ->where('is_active', true)
            ->first();

        if (!$destination) {
            return $this->error('Destinasi tidak ditemukan.', null, 404);
        }

        return $this->success($destination, 'Berhasil mengambil detail destinasi.');
    }

    /**
     * Update existing destination.
     */
    public function update(UpdateDestinationRequest $request, Destination $destination): JsonResponse
    {
        $destination->update($request->validated());

        return $this->success($destination, 'Berhasil memperbarui data destinasi.');
    }
}
