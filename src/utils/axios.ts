import axios from 'axios';
// import { Message } from 'element-ui';
// import store from '../store/index';

const instance = axios.create({
  baseURL: '/',
});

instance.interceptors.request.use(data => data);

// interface ReqConfg {
//   hideErrorMessage?: Boolean; // 返回非0错误码，是否隐藏接口错误提示
//   notRedirectLogin?: Boolean; // 返回错误码 -3 是否不跳转登录
// }

instance.interceptors.response.use(
  async data => {
    const responseData = data.data;
    // let showMessage = true;
    // let redirectLogin = true;

    // try {
    //   if (data.config.data) {
    //     const config: ReqConfg = JSON.parse(data.config.data);
    //     showMessage = config.hideErrorMessage !== true;
    //     redirectLogin = config.notRedirectLogin !== true;
    //   }
    // } catch (e) {
    //   console.log(e);
    // }

    // if (responseData.resultCode !== 0) {
    //   if (showMessage) {
    //     Message.error(responseData.resultMsg || '请求失败');
    //   }

    //   if (redirectLogin && responseData.resultCode === -3) {
    //     await axios.get('/loginOut');
    //     store.commit('setUser', null);
    //     const { config = {} } = store.getters;
    //     window.location.href = config.AMSFrontUrl || '/';
    //   }
    // }

    return responseData;
  },
  err => {
    console.log(err);
    // Message.error('请求错误');
    Promise.resolve(err);
  },
);

export default instance;

// 调用传递传递配置 hideErrorMessage 项示例
// const result: any = await axios.get('/touch', {
//   data: {
//     hideErrorMessage: true,
//   },
// });

// const res = await this.$axios.post(
//   '/login',
//   {
//     unicode: this.$route.query.unicode,
//   },
//   {
//     data: {
//       hideErrorMessage: true,
//     },
//   },
// );
