export const state = {
	countSecret: 2,
	test: 'test value',
	count: 10,
};
export const getters = {
	count: state => {
		return state.count;
	},
};
export const mutations = {
	incrementCount(state) {
		state.countSecret++;
	},
};
