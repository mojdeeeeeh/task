<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskStatus extends Model
{
        protected $fillable = ['status'];

        public function task()
        {
        	return $this->hasMany(\App\Task::class);
        }

}
