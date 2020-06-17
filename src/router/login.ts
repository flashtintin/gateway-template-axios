export default [
  {
    name: 'login',
    path: '/',
    component: () => import(/* webpackChunckName: login */ '../views/login.vue'),
  },
];
