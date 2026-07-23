<?php

namespace App\Filament\Resources\EmergencyContacts\Tables;

use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;

class EmergencyContactsTable
{
    public static function columns(): array
    {
        return [
            TextColumn::make('title')->searchable(),
            TextColumn::make('phone_number'),
            TextColumn::make('button_text'),
            IconColumn::make('is_active')->boolean(),
        ];
    }
}
