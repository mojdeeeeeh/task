<div class="card">
    <div class="card-header">
        Create Task
    </div>

    <div class="card-body">
        <div class="form-group row" >
            <label for="name" class="col-md-2 col-form-label text-md-right">
                Title
            </label>

            <div class="col-md-8">
                <input type="text" class="form-control"
                    v-model="task.title"  autofocus />
            </div>
        </div>

         <div class="form-group row" >
            <label for="name" class="col-md-2 col-form-label text-md-right">
                Body
            </label>

            <div class="col-md-8">
                <input type="text" class="form-control"
                    v-model="task.body"   />
            </div>
        </div>

        <div class="form-group row" >
            <label for="name" class="col-md-2 col-form-label text-md-right">
                Start
            </label>

            <div class="col-md-8">
                <input type="text" 
                    class="form-control"
                    v-model="task.start"
                    name="start" />
                   
            </div>
        </div>

        <div class="form-group row" >
            <label for="name" class="col-md-2 col-form-label text-md-right">
                Finish
            </label>

            <div class="col-md-8">
                <input type="text"
                    class="form-control"
                    v-model="task.finish" 
                    name="finish" />
            </div>
        </div>

        <div class="form-group row" >
            <label for="name" class="col-md-2 col-form-label text-md-right">
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
            <label for="name" class="col-md-2 col-form-label text-md-right">
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
            <div class="col-md-8 offset-md-2">
                <input type="submit" class="btn btn-primary" value="Create" @click="createTask" />
                <input type="button" class="btn btn-danger" value="Cancel" @click="cancel" />
            </div>
        </div>
    </div>
</div>
