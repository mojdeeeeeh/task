<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class UserController extends Controller
{
     public function index(Request $request)
    {
        if ($request->ajax())
        {
            $users = \App\User::all();

            return $users;
        }

        return view('users.index');
    }
}
