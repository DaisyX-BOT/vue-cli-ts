import Vue from 'vue';
import Vuex, {ActionTree, MutationTree, Action, GetterTree} from 'vuex';
import TYPES from './types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
Vue.use(Vuex);

const state: any = {
  barParam: {
      a: 1
  },
  saveIndexParams: {
      flag: false
  },
  topThreeData: {},
  bottomSixData: {}
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
});
