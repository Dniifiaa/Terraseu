<?php

namespace App\Filament\Resources\EmergencyContacts\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

class EmergencyContactForm
{
    public static function schema(): array
    {
        return [
            TextInput::make('title')
                ->required(),

            TextInput::make('phone_number')
                ->required(),

            TextInput::make('button_text')
                ->default('Cek informasi'),

            Textarea::make('description')
                ->required()
                ->columnSpanFull(),

            Toggle::make('is_active')
                ->default(true),
        ];
    }
}
