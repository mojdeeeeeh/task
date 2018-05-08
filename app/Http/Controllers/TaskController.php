<?php

namespace App\Http\Controllers;

use App\Task;
use App\User;
use App\TaskStatus;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->ajax())
        {
            $tasks = \App\Task::with(['sender',
                        'resiver',
                        'seconder',
                        'taskStatus'])->get();
            return $tasks;
        }
        return view('tasks.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Task::create([
            'title' => $request->title,
            'start' => $request->start,
            'finish' => $request->finish,
            'body' => $request->body,
            'sender_id' => \Auth::user()->id,
            'resiver_id' => $request->resiver_id,
            'seconder_id' => $request->seconder_id,
            'task_status_id' => $request->task_status_id,
            'task_status_id' => 1,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $task->update([
            'title' => $request->title,
            'start' => $request->start,
            'finish' => $request->finish,
            'body' => $request->body,
            'resiver_id' => $request->resiver_id,
            'seconder_id' => $request->seconder_id,

        ]);
       

        return $task;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
         $result = $task->delete();

        return ['status' => $result];
    }
}
