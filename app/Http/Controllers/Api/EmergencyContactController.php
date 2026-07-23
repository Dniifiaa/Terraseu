<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\EmergencyContact;
use App\Traits\ApiResponse;
use Illuminate\Http\JsonResponse;

class EmergencyContactController extends Controller
{
    use ApiResponse;

    /**
     * Get active emergency contact banner information.
     */
    public function index(): JsonResponse
    {
        $contacts = EmergencyContact::where('is_active', true)->get();

        return $this->success($contacts, 'Berhasil mengambil kontak darurat.');
    }
}
