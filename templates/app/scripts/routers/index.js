import Home from '../views/home';
import TodoList from '../views/todo-list';
import NotFound from '../views/404';

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
