<?php

namespace App\Filament\Resources\Categories\Tables;

use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;

class CategoriesTable
{
    public static function columns(): array
    {
        return [
            TextColumn::make('name')->searchable()->sortable(),
            TextColumn::make('slug'),
            TextColumn::make('order')->sortable(),
            IconColumn::make('is_active')->boolean(),
        ];
    }
}
