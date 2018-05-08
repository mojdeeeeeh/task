<?php

use Illuminate\Database\Seeder;

class taskStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\TaskStatus::create([
        	'status' =>'Active'
        ]);

        \App\TaskStatus::create([
        	'status' =>'Finish'
        ]);

        \App\TaskStatus::create([
        	'status' =>'Delete'
        ]);
    }
}
