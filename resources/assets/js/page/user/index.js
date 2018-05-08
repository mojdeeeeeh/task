import Store from './index-store'

new Vue({
	el: '#user',

	store: Store,


	computed:{
		users: state => state.$store.getters.users
	},

	mounted(){
		this.$store.dispatch('loadData');
	},
	
})
