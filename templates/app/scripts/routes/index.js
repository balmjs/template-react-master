import baseRoutes from './base';
import topicRoutes from './topic';
import todoRoutes from './todo';
import NotFound from '../views/not-found';

let otherRoutes = [
  {
    path: '*',
    component: NotFound
  }
];

let routes = baseRoutes.concat(topicRoutes, todoRoutes, otherRoutes);

export default routes;
