<?php

namespace App\Filament\Resources\EmergencyContacts;

use App\Filament\Resources\EmergencyContacts\Schemas\EmergencyContactForm;
use App\Filament\Resources\EmergencyContacts\Tables\EmergencyContactsTable;
use App\Models\EmergencyContact;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;

class EmergencyContactResource extends Resource
{
    protected static ?string $model = EmergencyContact::class;

    protected static ?string $navigationIcon = 'heroicon-o-phone';

    protected static ?string $navigationGroup = 'Layanan Darurat';

    public static function form(Form $form): Form
    {
        return $form->schema(EmergencyContactForm::schema());
    }

    public static function table(Table $table): Table
    {
        return $table->columns(EmergencyContactsTable::columns());
    }
}
