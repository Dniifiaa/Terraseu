<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Destination;
use App\Models\EmergencyContact;
use App\Models\Hero;
use Illuminate\View\View;

class LandingController extends Controller
{
    /**
     * Render TERRASEU Monolithic Landing Page.
     */
    public function index(): View
    {
        $hero = Hero::where('is_active', true)->first();
        
        $categories = Category::where('is_active', true)
            ->orderBy('order', 'asc')
            ->get();

        $destinations = Destination::with('category')
            ->where('is_active', true)
            ->where('is_featured', true)
            ->orderBy('order', 'asc')
            ->get();

        $emergencyContact = EmergencyContact::where('is_active', true)->first();

        return view('landing', compact('hero', 'categories', 'destinations', 'emergencyContact'));
    }
}
