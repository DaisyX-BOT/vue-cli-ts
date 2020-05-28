import TYPES from './types';
import { MutationTree } from 'vuex';
import { Message, Option } from 'element-ui';

const mutations: MutationTree<any> = {

  [TYPES.SET_LOGIN_STATUS](state, flag): void {
    state.login = flag;
  },
  [TYPES.SET_INDEX_PARAMS](state, preload): void {
    state.saveIndexParams = preload;
    state.saveIndexParams.flag = true;
  },
  // 获取top3数据
  [TYPES.GET_QHLFXTOP_THREE](state, preload): void {
    // topThreeData
    console.log(preload);
    state.topThreeData = preload.data.data;
  },
  // 获取bottom6数据
  [TYPES.GET_QHLFX_BOTTOM_SIX](state, preload): void {
    // topThreeData
    console.log(preload);
    state.bottomSixData = preload.data.data;
  }
};
export default mutations;
