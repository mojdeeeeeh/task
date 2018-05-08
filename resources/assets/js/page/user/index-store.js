export default new Vuex.Store({
	state: {
		users_data:[],
		
	},

	getters:{
		users: state => state.users_data,

	},

	mutations:{
		setUsers(state, data){
			state.users_data = data;
		},
	},

	actions:{
		loadData(context){
			Axios.get('/users')
			     .then(res => context.commit('setUsers', res.data));
		}
	}
})