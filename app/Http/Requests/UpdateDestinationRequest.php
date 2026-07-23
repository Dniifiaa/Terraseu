<?php

namespace App\Http\Requests;

class UpdateDestinationRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|string|max:255',
            'slug'        => 'required|string|max:255|unique:destinations,slug,' . $this->route('destination'),
            'location'    => 'required|string|max:255',
            'description' => 'required|string',
            'rating'      => 'required|numeric|min:0|max:5',
            'image'       => 'nullable|string',
            'is_featured' => 'boolean',
            'is_active'   => 'boolean',
            'order'       => 'integer',
        ];
    }
}
