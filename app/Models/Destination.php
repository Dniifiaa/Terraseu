<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Destination extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'location',
        'description',
        'rating',
        'image',
        'is_featured',
        'is_active',
        'order',
    ];

    protected $casts = [
        'rating'      => 'decimal:2',
        'is_featured' => 'boolean',
        'is_active'   => 'boolean',
        'order'       => 'integer',
    ];

    /**
     * Get category associated with this destination.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
