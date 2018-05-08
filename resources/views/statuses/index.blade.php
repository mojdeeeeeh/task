@extends('layouts.app')

@section('content')
<div id="status" class="container">
	 <div class="card" >
		<div class="card-header">
			Task Status field
		</div>
		<div class="card-body">
			<table class="table table-hover table-stripped">
				<thead>
					<tr>
						<th>status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="status in statuses">
						<td>@{{ status.status }}</td>
						<td><a href="#" class="btn btn-success">+</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
@endsection

@section('scripts')
<script src="{{ mix('js/page/taskStatus/index.js') }}" defer></script>
@endsection