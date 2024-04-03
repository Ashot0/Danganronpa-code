const myModule = {
	state: {
		name: 'John Doe',
		age: '28',
	},
	mutations: {
		SET_NAME: (state, payload) => {
			state.age++;
		},
	},
	actions: {
		SET_NAME: (context, payload) => {
			context.commit('SET_NAME', payload);
		},
	},
	getters: {
		NAME: (state) => {
			return state.age;
		},
	},
};

export default myModule;
