<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmergencyContact extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'phone_number',
        'button_text',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
