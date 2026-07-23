<?php

namespace App\Filament\Resources\Categories;

use App\Filament\Resources\Categories\Schemas\CategoryForm;
use App\Filament\Resources\Categories\Tables\CategoriesTable;
use App\Models\Category;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $navigationGroup = 'Master Ekowisata';

    public static function form(Form $form): Form
    {
        return $form->schema(CategoryForm::schema());
    }

    public static function table(Table $table): Table
    {
        return $table->columns(CategoriesTable::columns());
    }
}
