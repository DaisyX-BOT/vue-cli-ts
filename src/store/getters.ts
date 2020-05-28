import {GetterTree} from 'vuex';

const getters: GetterTree<any, any> = {
    saveIndexParams: (state) => state.saveIndexParams, // 跳转时首页的参数保存
    topThreeData: (state) => state.topThreeData, // top3数据
    bottomSixData: (state) => state.bottomSixData // bottom6数据

};

export default getters;
