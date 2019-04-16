import { asyncComponent } from '@/helpers';
const Home = asyncComponent(() => import('@/views/home'));

let baseRoutes = [
  {
    path: '/home',
    component: Home
  }
];

export default baseRoutes;
