@extends('layouts.app')

@section('content')
<div class="container" id="user">
    <div class="row justify-content-center">
        <div class="col-md-8">
           
            {{-- index --}}
            <div class="card" >
                <div class="card-header">
                    Users List
                    {{-- <a class="btn btn-info pull-right" href="#" @click="showCreateForm">
                        <i class="fa fa-user"></i>
                    </a> --}}
                </div>
                <div class="card-body">
                    {{-- <div v-show="! hasUser">
                        No any user exists.
                    </div> --}}
                    <table class="table table-hover table-stripped" >
                        <thead>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    EMail
                                </td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users">
                                <td>
                                    @{{ user.name }}
                                </td>
                                <td>
                                    @{{ user.email }}
                                </td>
                                <td>
                                   {{--  <a class="btn btndefault btndelete" href="#" data-record-id="user.id" @click="deleteUser(user)">&times;</a>
                                    <a class="btn btndefault btnupdate" href="#" data-record-id="user.id" @click="showUpdateForm(user)">&plus;</a> --}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script src="{{ mix('js/page/user/index.js') }}" defer></script>
@endsection
