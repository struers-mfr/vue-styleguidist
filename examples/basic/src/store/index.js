import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations } from './mutations';
// import { mapGetters, mapMutations } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations,
});
