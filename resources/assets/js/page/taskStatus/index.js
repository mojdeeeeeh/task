import Store from './index-store'

new Vue({
	el: '#status',

	store: Store,

	computed:{
		statuses: state => state.$store.getters.statuses
	},

	mounted(){
		this.$store.dispatch('loadData');
	},
})

