<?php

namespace App\Filament\Resources\Destinations\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Support\Str;

class DestinationForm
{
    public static function schema(): array
    {
        return [
            Select::make('category_id')
                ->relationship('category', 'name')
                ->required(),

            TextInput::make('name')
                ->required()
                ->live(onBlur: true)
                ->afterStateUpdated(fn ($state, callable $set) => $set('slug', Str::slug($state))),

            TextInput::make('slug')
                ->required()
                ->unique(ignoreRecord: true),

            TextInput::make('location')
                ->required(),

            TextInput::make('rating')
                ->numeric()
                ->default(5.00),

            Textarea::make('description')
                ->required()
                ->columnSpanFull(),

            TextInput::make('image')
                ->label('Image URL')
                ->required(),

            Toggle::make('is_featured')
                ->label('Tampilkan di Hero Floating Cards')
                ->default(false),

            Toggle::make('is_active')
                ->default(true),
        ];
    }
}
