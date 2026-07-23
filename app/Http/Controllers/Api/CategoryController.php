<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    use ApiResponse;

    /**
     * Get list of active categories.
     */
    public function index(): JsonResponse
    {
        $categories = Category::where('is_active', true)
            ->orderBy('order', 'asc')
            ->get();

        return $this->success($categories, 'Berhasil mengambil kategori wisata.');
    }

    /**
     * Update category.
     */
    public function update(UpdateCategoryRequest $request, Category $category): JsonResponse
    {
        $category->update($request->validated());

        return $this->success($category, 'Berhasil memperbarui data kategori.');
    }
}
