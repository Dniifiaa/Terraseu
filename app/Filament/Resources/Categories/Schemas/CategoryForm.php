<?php

namespace App\Filament\Resources\Categories\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Support\Str;

class CategoryForm
{
    public static function schema(): array
    {
        return [
            TextInput::make('name')
                ->required()
                ->live(onBlur: true)
                ->afterStateUpdated(fn ($state, callable $set) => $set('slug', Str::slug($state))),

            TextInput::make('slug')
                ->required()
                ->unique(ignoreRecord: true),

            TextInput::make('icon')
                ->label('Icon Key / Class'),

            TextInput::make('order')
                ->numeric()
                ->default(0),

            Toggle::make('is_active')
                ->default(true),
        ];
    }
}
