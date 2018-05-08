@extends('layouts.app')

@section('content')
<div class="container" id="root">
    {{-- Update form --}}
    <div v-show="isUpdateMode">
        @include('tasks.edit')
    </div>
     {{-- Create form --}}
    <div v-show="isCreateMode">
        @include('tasks.create')
    </div>
<div v-show="isNormalMode">
<h3 class="text-lg-center"> task data</h3>
<a class="btn btn-info" href="#" @click="showCreateForm()">
    &plus;
</a>

<table class="table table-hover"  >
    <thead>
        <tr>
            <th>title</th>
            <th>sender</th>
            <th>resiver</th>
            <th>seconder</th>
            <th>status</th>
            <th>start</th>
            <th>finish</th>
            <th>body</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="task in tasks">
            <td> @{{ task.title }} </td>
            <td> @{{ task.sender.name }} </td>
            <td> @{{ task.resiver.name }} </td>
            <td> @{{ task.seconder.name }} </td>
            <td> @{{ task.task_status.status }} </td>
            <td> @{{ task.start }} </td>
            <td> @{{ task.finish }} </td>
            <td> @{{ task.body }} </td>
            <td>
                <a class="btn btn-primary" href="#" :data-record-id="task.id" @click="showUpdateForm(task)">
                        &plus;
                </a>
                <a class="btn btn-danger" href="#" data-record-id="project.id" @click=" deleteTask(task)">
                        &times;
                </a>
            </td>
        </tr>
    </tbody>
</table>
</div>
</div>
@endsection

@section('scripts')
<script src="{{ mix('js/page/task/index.js') }}" defer></script>

@endsection