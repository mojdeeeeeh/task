export default new Vuex.Store({

	state:{
		statuses_data:[],
	},

	getters:{
		statuses: state => state.statuses_data
	},

	mutations:{
		setStatuses(state,data){
			state.statuses_data = data;
		}
	},

	actions:{
		loadData(context){
			Axios.get('/statuses')
			.then(res => context.commit('setStatuses', res.data))
		}
	}

}) 