<?php

use Illuminate\Database\Seeder;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	if (\App\User::userExists('root'))
    	{
    	
            \App\User::create([
            	'name' =>'root',
            	'email' =>'root@task.dev',
            	'password' => bcrypt('123456'),
            ]);
        }
            return;
        
    }
}
