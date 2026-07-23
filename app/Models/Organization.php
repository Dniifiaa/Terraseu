<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'desc',
        'is_active',
        'order',
    ];

    protected $casts = [
        'desc' => 'array',
        'is_active' => 'boolean',
    ];
}
