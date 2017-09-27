import { asyncComponent } from '../helpers';
const TodoList = asyncComponent(() => import('../views/todo-list'));

let todoRoutes = [{
  path: '/todo-list',
  component: TodoList
}];

export default todoRoutes;
