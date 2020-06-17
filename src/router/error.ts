export default [
  {
    name: 'error',
    path: '*',
    component: () => import(/* webpackChunckName: error */ '../views/error.vue'),
  },
];
