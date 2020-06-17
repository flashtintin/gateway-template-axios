interface routeComponent {
  name: string;
  path: string;
  component: Function;
  children?: routeComponent[];
}

const files = require.context('.', false, /\.ts$/);
const children: routeComponent[] = [];

files.keys().forEach(key => {
  if (key === './index.ts') return;
  children.push(...files(key).default);
});

export default [
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunckName: home */ '../../views/home/index.vue'),
    children,
  },
];
