<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title','body','start_date','finish_date','task_status_id','sender_id','resiver_id','resiver_id'];

    protected $guarded = [
        'id'
    ];

    public function TaskStatus()
    {
        return $this->belongsTo(\App\TaskStatus::class);
    }
     public function sender()
     {
    	return $this->belongsTo(\App\User::class, 'sender_id', 'id');
    }
     public function resiver()
     {
    	return $this->belongsTo(\App\User::class, 'resiver_id', 'id');
    }
    public function seconder()
    {
        return $this->belongsTo(\App\User::class, 'seconder_id', 'id');
    }

}
