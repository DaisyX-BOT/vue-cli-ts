// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './axios/index';
import './css/best.css'; // 初始化样式
import VueContextMenu from 'vue-contextmenu';
import apiConfig from './params/config';
// import moment from 'moment/moment'; // 时间插件

Vue.use(VueContextMenu);
// 添加axios请求域名
axios.defaults.baseURL = apiConfig.apiHost;

Vue.prototype.$BusEvent = new Vue();
// 将axios设置到vue原型里面

// Vue.prototype.axios = axios;
Vue.config.productionTip = false;

// Vue.filter('moment', (value: string, formatString: string): string => {
//   formatString = formatString || 'YYYY-MM-DD HH:mm:ss';

//   return moment(value).format(formatString); // value可以是普通日期 20170723

//   // return moment.unix(value).format(formatString); // 这是时间戳转时间

// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data: {
    eventHub: new Vue()
  }
});
