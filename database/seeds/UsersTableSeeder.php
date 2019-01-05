<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\User; 

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	User::create([
    		'name' => 'Jonathan Whittle',
    		'email' => 'jonathan.m.whittle@gmail.com',
    		'password' => bcrypt('jwhittle')
    	]);
    }
}
