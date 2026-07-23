<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
        'date',
        'desc',
        'is_active',
        'order',
    ];

    protected $casts = [
        'desc' => 'array',
        'is_active' => 'boolean',
    ];
}
