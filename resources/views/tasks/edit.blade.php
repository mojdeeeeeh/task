<div class="card">
    <div class="card-header">
        Modify Task
    </div>

    <div class="card-body">
        <div class="form-group row" >
            <label for="name" class="col-md-4 col-form-label text-md-right">
            	title
            </label>

            <div class="col-md-6">
                <input type="text"
                	class="form-control"
                    v-model="task.title"
                	required autofocus />
            </div>
        </div>

        <div class="form-group row" >
            <label for="name" class="col-md-4 col-form-label text-md-right">
            	start
            </label>

            <div class="col-md-6">
                <input type="text"
                	class="form-control"
                    v-model="task.start"
                 	required />
            </div>
        </div>

        <div class="form-group row" >
            <label for="name" class="col-md-4 col-form-label text-md-right">
                finish
            </label>

            <div class="col-md-6">
                <input type="text"
                    v-model="task.finish"
                    class="form-control"
                    required />
            </div>
        </div>

        <div class="form-group row" >
            <label for="name" class="col-md-4 col-form-label text-md-right">
                body
            </label>

            <div class="col-md-6">
                <input type="text"
                    v-model="task.body"
                    class="form-control"
                    required />
            </div>
        </div>

        <div class="form-group row" >
            <label for="name" class="col-md-4 col-form-label text-md-right">
                Resiver user
            </label>

            <div class="col-md-8">
                <select v-model="task.resiver_id">
                    <option v-for="user in users" :value="user.id">
                        @{{ user.name }}
                    </option>
                </select>
            </div>
        </div>

         <div class="form-group row" >
            <label for="name" class="col-md-4 col-form-label text-md-right">
                Seconder user
            </label>

            <div class="col-md-8">
                <select v-model="task.seconde_id">
                    <option v-for="user in users" :value="user.id">
                        @{{ user.name }}
                    </option>
                </select>
            </div>
        </div>
       
        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <input type="submit" class="btn btn-primary" value="Update" @click="updateTask" />
                <input type="button" class="btn btn-danger" value="Cancel" @click="cancel" />
            </div>
        </div>
    </div>

</div>

