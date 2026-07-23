<?php

namespace App\Http\Requests;

class UpdateHeroRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title1'            => 'required|string|max:255',
            'title2'            => 'required|string|max:255',
            'subtitle'          => 'required|array',
            'background_images' => 'required|array',
            'is_active'         => 'boolean',
        ];
    }
}
