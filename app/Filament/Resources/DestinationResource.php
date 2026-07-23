<?php

namespace App\Filament\Resources;

use App\Models\Destination;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class DestinationResource extends Resource
{
    protected static ?string $model = Destination::class;

    protected static ?string $navigationIcon = 'heroicon-o-map-pin';
    protected static ?string $navigationGroup = 'Ecotourism Content';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn ($state, callable $set) => $set('slug', \Illuminate\Support\Str::slug($state))),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->unique(Destination::class, 'slug', ignoreRecord: true),
                Forms\Components\TextInput::make('location')
                    ->required(),
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('rating')
                    ->numeric()
                    ->default(5.00)
                    ->minValue(0)
                    ->maxValue(5.00),
                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->directory('destinations')
                    ->required(),
                Forms\Components\Toggle::make('is_featured')
                    ->label('Featured in Hero Floating Cards'),
                Forms\Components\Toggle::make('is_active')
                    ->default(true),
                Forms\Components\TextInput::make('order')
                    ->numeric()
                    ->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('name')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('category.name')->sortable(),
                Tables\Columns\TextColumn::make('location')->searchable(),
                Tables\Columns\TextColumn::make('rating')->sortable(),
                Tables\Columns\IconColumn::make('is_featured')->boolean(),
                Tables\Columns\IconColumn::make('is_active')->boolean(),
            ])
            ->defaultSort('order', 'asc');
    }

    public static function getPages(): array
    {
        return [
            'index'  => DestinationResource\Pages\ListDestinations::route('/'),
            'create' => DestinationResource\Pages\CreateDestination::route('/create'),
            'edit'   => DestinationResource\Pages\EditDestination::route('/{record}/edit'),
        ];
    }
}
