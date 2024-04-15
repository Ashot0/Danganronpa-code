import { createStore } from 'vuex';
import ActiveCharacter from './modules/ActiveCharacter';
import Loading from './modules/Loading';

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		ActiveCharacter,
		Loading,
	},
});
