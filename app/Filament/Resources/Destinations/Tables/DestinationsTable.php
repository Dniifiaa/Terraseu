<?php

namespace App\Filament\Resources\Destinations\Tables;

use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class DestinationsTable
{
    public static function columns(): array
    {
        return [
            ImageColumn::make('image'),
            TextColumn::make('name')->searchable()->sortable(),
            TextColumn::make('category.name')->sortable(),
            TextColumn::make('location'),
            TextColumn::make('rating')->sortable(),
            IconColumn::make('is_featured')->boolean(),
            IconColumn::make('is_active')->boolean(),
        ];
    }
}
