import { createStore } from 'vuex';
import myModule from './modules/module';
import ActiveCharacter from './modules/ActiveCharacter';

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		myModule,
		ActiveCharacter,
	},
});
