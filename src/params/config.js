export const __DEV__ = process.env.NODE_ENV === 'development';
const __TEST__ = process.env.NODE_ENV === 'test';

export default {
    apiHost: __DEV__ ? 'http://10.5.114.112:5000/' : ( __TEST__ ? 'http://10.5.114.112:5000/' : 'http://10.5.114.112:5000/')
    // apiHost: __DEV__ ? 'http://10.5.99.63:8122/' : ( __TEST__ ? 'http://xmgl-test.mingyuanyun.com:8889' : 'http://xmgl-api.mingyuanyun.com')
    // apiHost: __DEV__ ? 'http://10.5.99.59:8090/' : ( __TEST__ ? 'http://xmgl-test.mingyuanyun.com:8889' : 'http://xmgl-api.mingyuanyun.com')
};
