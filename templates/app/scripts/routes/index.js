import { asyncComponent } from '../helpers';
const Home = asyncComponent(() => import('../views/home'));
const TodoList = asyncComponent(() => import('../views/todo-list'));
const NotFound = asyncComponent(() => import('../views/not-found'));

let routes = [{
  path: '/home',
  component: Home
}, {
  path: '/todo-list',
  component: TodoList
}, {
  path: '*',
  component: NotFound
}];

export default routes;
