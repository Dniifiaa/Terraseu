<?php

namespace App\Filament\Resources\Destinations;

use App\Filament\Resources\Destinations\Schemas\DestinationForm;
use App\Filament\Resources\Destinations\Tables\DestinationsTable;
use App\Models\Destination;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;

class DestinationResource extends Resource
{
    protected static ?string $model = Destination::class;

    protected static ?string $navigationIcon = 'heroicon-o-map-pin';

    protected static ?string $navigationGroup = 'Master Ekowisata';

    public static function form(Form $form): Form
    {
        return $form->schema(DestinationForm::schema());
    }

    public static function table(Table $table): Table
    {
        return $table->columns(DestinationsTable::columns());
    }
}
