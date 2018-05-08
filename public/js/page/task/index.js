/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/page/task/index-store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (new Vuex.Store({
	state: {
		tasks_data: []
		// users: []
	},

	getters: {
		tasks: function tasks(state) {
			return state.tasks_data;
		}
		// users: state => state.users,

	},

	mutations: {
		setTasks: function setTasks(state, data) {
			state.tasks_data = data;
		},

		// setUsers(state, data){
		// 	state.Users_data = data;
		// },
		// setUsers: (state, data) => state.users = data,
		updateTask: function updateTask(state, data) {
			var task = state.tasks_data.filter(function (el) {
				return el.id == data.id;
			})[0];

			if (null != task) {
				task.title = data.title;
				task.start = data.start;
				task.finish = data.finish;
				task.body = data.body;
				task.resiver_id = data.resiver_id;
				task.seconder_id = data.seconder_id;
			}
		},
		newTask: function newTask(state, data) {
			state.tasks_data.push(data);
		},
		deleteTask: function deleteTask(state, data) {
			var index = state.tasks_data.map(function (el) {
				return el.id;
			}).indexOf(data.id);

			state.Tasks_data.splice(index, 1);
		}
	},

	actions: {
		loadData: function loadData(context) {
			Axios.get('/tasks').then(function (res) {
				return context.commit('setTasks', res.data);
			});
		},
		updateTask: function updateTask(context, task) {
			Axios.put('/tasks/' + task.id, task).then(function (res) {
				context.commit('updateTask', res.data);

				alert('Updated');
			}).catch(function (err) {
				alert(err.message);
			});
		},
		newTask: function newTask(context, task) {
			return new Promise(function (resolve, reject) {
				Axios.post('/tasks', task).then(function (res) {
					context.commit('newTask', res.data);

					resolve(res);
					alert('Inserted');
				}).catch(function (err) {
					reject(err);
					alert(err.message);
				});
			});
		},
		deleteTask: function deleteTask(context, task) {
			Axios.delete('/tasks/' + task.id).then(function (res) {
				context.commit('deleteTask', task);

				alert('Deleted');
			}).catch(function (err) {
				alert(err.message);
			});
		}

		//       loadUsersList(context, page){
		// 	axios.get('/users/users')
		// 	 	.then(res => context.commit('setUsers', res.data))
		// 		.catch(err => alert(err.message));
		// },

	}

}));

/***/ }),

/***/ "./resources/assets/js/page/task/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_store__ = __webpack_require__("./resources/assets/js/page/task/index-store.js");


new Vue({
	el: '#root',

	store: __WEBPACK_IMPORTED_MODULE_0__index_store__["a" /* default */],

	data: {
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
			task_status_id: null
		},

		users: []

	},

	computed: {
		tasks: function tasks(state) {
			return state.$store.getters.tasks;
		},
		isNormalMode: function isNormalMode(state) {
			return state.formMode == 0;
		},
		isUpdateMode: function isUpdateMode(state) {
			return state.formMode == 1;
		},
		isCreateMode: function isCreateMode(state) {
			return state.formMode == 2;
		}

	},

	mounted: function mounted() {
		this.$store.dispatch('loadData');
		this.loadUsers();
	},


	methods: {
		emptyTask: function emptyTask() {
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
		cancel: function cancel() {
			this.formMode = 0;
		},
		showUpdateForm: function showUpdateForm(task) {
			this.task = Object.assign({}, task);
			this.formMode = 1;
		},
		updateTask: function updateTask() {
			this.$store.dispatch('updateTask', this.task);
			this.formMode = 0;
		},
		loadUsers: function loadUsers() {
			var _this = this;

			Axios.get('/users').then(function (res) {
				return _this.users = res.data;
			}).catch(function (err) {
				return alert(err.message);
			});
		},
		showCreateForm: function showCreateForm() {
			this.emptyTask();
			this.formMode = 2;
		},
		createTask: function createTask() {
			var _this2 = this;

			this.$store.dispatch('newTask', this.task).then(function (res) {
				return _this2.formMode = 0;
			}).catch(function (err) {
				return alert(err.message);
			});
		},
		deleteTask: function deleteTask(task) {
			var confirmed = confirm('Are you sure to delete task?');

			if (!confirmed) {
				return;
			}

			this.$store.dispatch('deleteTask', task);
			this.formMode = 0;
		}
	}

});

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

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/page/task/index.js");


/***/ })

/******/ });