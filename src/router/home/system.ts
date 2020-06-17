const system = {
  name: 'system',
  path: '/system',
  component: () => import(/* webpackChunckName: system */ '../../views/home/system/index.vue'),
};

export default [system];
