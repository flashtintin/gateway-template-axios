/**
 * Created by kid on 2017/5/15.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from './utils/axios';
import app from './views/app.vue';
import router from './router';
import store from './store';

Vue.prototype.$axios = axios;

Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
});
