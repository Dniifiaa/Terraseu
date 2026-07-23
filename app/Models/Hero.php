<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    use HasFactory;

    protected $fillable = [
        'title1',
        'title2',
        'subtitle',
        'background_images',
        'is_active',
    ];

    protected $casts = [
        'subtitle'          => 'array',
        'background_images' => 'array',
        'is_active'         => 'boolean',
    ];
}
