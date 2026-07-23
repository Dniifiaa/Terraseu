<?php

namespace App\Http\Requests;

class UpdateCategoryRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'      => 'required|string|max:255',
            'slug'      => 'required|string|max:255|unique:categories,slug,' . $this->route('category'),
            'icon'      => 'nullable|string|max:255',
            'is_active' => 'boolean',
            'order'     => 'integer',
        ];
    }
}
