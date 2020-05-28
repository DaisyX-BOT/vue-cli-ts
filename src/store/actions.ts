import { ActionTree } from 'vuex';
import TYPES from './types';
import axios from 'axios';

const actions: ActionTree<any, any> = {

  // ajax 初始化
  async initAjax({ dispatch }) {
    dispatch('getRequiredDevelopment');
    dispatch('addPlanLocal');
    dispatch('searchUser');
    dispatch('deleteLocalDate');
    dispatch('modifiyLocal');
    dispatch('exportDevelopPlan');
    dispatch('startApprove');
    dispatch('changeAudit');
    dispatch('checkAllPlan');
    dispatch('setFlag');
    dispatch('isCheckedAll');
    dispatch('CheckSubmit'); // 7.31 提交需求
  },

  // 获取modules
  setLogin({ state, commit }, flag: boolean): void {
    commit(TYPES.SET_LOGIN_STATUS, flag);
  },
  setIndexParams({ state, commit }, params: {[key: string]: any}): void {
    commit(TYPES.SET_INDEX_PARAMS, params);
  },
  // 获取top3数据

  async GetQHLFXTopThree({state, commit}, params: {[key: string]: any}) {
    axios.get(params.url, params.data).then((res: {[key: string]: any}) => {
      commit(TYPES.GET_QHLFXTOP_THREE, res);
    });
  },
  // 获取bottom6数据
  async GetQHLFXBottomSix({state, commit}, params: {[key: string]: any}) {
    axios.get(params.url, {
      params: {
        //
      }
    }).then((res: {[key: string]: any}) => {
      commit(TYPES.GET_QHLFX_BOTTOM_SIX, res);
    });
  }
};

export default actions;
