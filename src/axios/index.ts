// 引入axios以及element ui中的loading和MessageBox组件
import Vue from 'vue';
import axios from 'axios';
import { Loading, MessageBox } from 'element-ui';

// // 超时时间
axios.defaults.timeout = 1000000;
// 默认带上cookie
axios.defaults.withCredentials = true;
// axios.defaults.headers.AppId = 'keshihuafenxi';
// axios.defaults.headers.AppKey = '01d358feb9a354cf';

// // http请求拦截器
let loadinginstace: any;

const curWwwPath = window.document.location.href;
// // axios.interceptors.request.use(config => {

axios.interceptors.request.use((config: any) => {

    loadinginstace = Loading.service({ fullscreen: true, background: 'rgba(0, 0, 0, 0)' });

    config.headers.AppId = 'keshihuafenxi';
    config.headers.AppKey = '01d358feb9a354cf';

    console.log('config', config);

    return config;
}, (error: any) => {
    loadinginstace.close();

    return Promise.reject(error);
});

// // http响应拦截器
axios.interceptors.response.use((data: any) => {// 响应成功关闭loading
    // axios.interceptors.response.use(data => {// 响应成功关闭loading

    // 登录页面不执行此判断
    // if (data.data.error && curWwwPath.indexOf('landing') === -1) {
    //     MessageBox.alert('您还未登陆或者您的登陆已失效,请登陆后再试', '温馨提示', {
    //         confirmButtonText: '确定',
    //         callback: (action) => {
    //         // callback: action => {
    //         window.location.href = RealPath + '/#/landing';
    //         }
    //     });
    // }
    // Promise.reject(data);
    // const ccc = data;
    loadinginstace.close();

    return data;
},
    (error) => {
        // // }, error => {
        // let errText = '';
        // if (error.response.data.error.message.indexOf('电话号码') !== -1) {
        //     errText = error.response.data.error.message;
        // }
        loadinginstace.close();
        // MessageBox.alert(errText ? errText : '请求超时,请稍后重试', '温馨提示', {
        // confirmButtonText: '确定',
        // callback: (action) => {
        // // window.location.href='/#/landing'
        // }
        // });

        return Promise.reject(error);
    });

export default axios;
