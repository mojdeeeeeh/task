export default new Vuex.Store({
	state: {
		tasks_data:[],
		// users: []
	},

	getters:{
		tasks: state => state.tasks_data,
		// users: state => state.users,

	},

	mutations:{
		setTasks(state, data){
			state.tasks_data = data;
		},
		// setUsers(state, data){
		// 	state.Users_data = data;
		// },
		// setUsers: (state, data) => state.users = data,
		updateTask(state, data){
			let task = state.tasks_data.filter(el => el.id == data.id)[0];

			if (null != task){
				task.title = data.title;
				task.start = data.start;
				task.finish = data.finish;
				task.body = data.body;
				task.resiver_id = data.resiver_id;	
				task.seconder_id = data.seconder_id;

			}
		},
		newTask(state, data){
			state.tasks_data.push(data);
		},

		deleteTask(state, data){
			let index = state.tasks_data.map(el => el.id)
						              .indexOf(data.id);

            state.Tasks_data.splice(index, 1);
		},

	},

	actions:{
		loadData(context){
			Axios.get('/tasks')
			     .then(res => context.commit('setTasks', res.data));
		},

		updateTask(context, task) {
            Axios.put('/tasks/' + task.id, task)
                .then(res => {
                	context.commit('updateTask', res.data);

                    alert('Updated');
                })
                .catch(err => {
                    alert(err.message);
                });
        },

        newTask(context, task) {
        	return new Promise((resolve, reject) => {
	            Axios.post('/tasks', task)
	                .then(res => {
	                	context.commit('newTask', res.data);

	                    resolve(res);
	                    alert('Inserted');
	                })
	                .catch(err => {
	                    reject(err);
	                    alert(err.message);
	                });
        	});
        },

        deleteTask(context, task) {
            Axios.delete('/tasks/' + task.id)
                .then(res => {
                    context.commit('deleteTask', task);

                    alert('Deleted');
                })
                .catch(err => {
                    alert(err.message);
                });
        }


  //       loadUsersList(context, page){
		// 	axios.get('/users/users')
		// 	 	.then(res => context.commit('setUsers', res.data))
		// 		.catch(err => alert(err.message));
		// },

	},
	
})