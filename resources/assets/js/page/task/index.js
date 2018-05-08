import Store from './index-store'

new Vue({
	el: '#root',

	store: Store,

	data:{
		formMode: 0,

		task: {
			id: null,
			title: null,
			body: null,
			start: null,
			finish: null,
			sender_id: null,
			resiver_id: null,
			seconder_id: null,
			task_status_id: null,
		},

		users: [],

	},

	computed:{
		tasks: state => state.$store.getters.tasks,
		isNormalMode: state => state.formMode == 0,
		isUpdateMode: state => state.formMode == 1,
		isCreateMode: state => state.formMode == 2,

	},

	mounted(){
		this.$store.dispatch('loadData');
		this.loadUsers();

	},

	methods:{

		emptyTask(){
			this.task.id = null;
			this.task.title = null;
			this.task.body = null;
			this.task.start = null;
			this.task.finish = null;
			this.task.sender_id = null;
			this.task.resiver_id = null;
			this.task.seconder_id = null;
			this.task.task_status_id = null;
		},

		cancel(){
			this.formMode = 0;	
		},

		showUpdateForm(task) {
            this.task = Object.assign({}, task);
            this.formMode = 1;
        },

        updateTask(){
        	this.$store.dispatch('updateTask', this.task);
        	this.formMode = 0;
        },

        loadUsers(){
            Axios.get('/users')
	              .then(res => this.users = res.data)
	              .catch(err => alert(err.message));
            },

        showCreateForm() {
        	this.emptyTask();
            this.formMode = 2;
        },

        createTask() {
        	this.$store.dispatch('newTask', this.task)
        		.then(res => this.formMode = 0)
        		.catch(err => alert(err.message));
        },

        deleteTask(task) {
            let confirmed = confirm('Are you sure to delete task?');

            if (! confirmed){
                return;
            }

            this.$store.dispatch('deleteTask', task);
            this.formMode = 0;
        },



	}
	
})


// new Vue({
// 	el: '#root',

// 	data:{
// 		tasks: [
// 		]
// 	},

// 	mounted(){
// 		this.loadData();
// 	},

// 	methods:{
// 		loadData(){
// 			Axios.get('/tasks')
// 			.then(res => this.tasks = res.data);
// 		}
// 	},
// })
