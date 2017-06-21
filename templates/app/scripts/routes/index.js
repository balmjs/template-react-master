import { asyncComponent } from '../helpers';
const Home = asyncComponent(() => import('../views/home'));
const TopicList = asyncComponent(() => import('../views/topic/list'));
const TopicDetail = asyncComponent(() => import('../views/topic/detail'));
const TodoList = asyncComponent(() => import('../views/todo-list'));
const NotFound = asyncComponent(() => import('../views/not-found'));

let routes = [{
  path: '/home',
  component: Home
}, {
  path: '/topics',
  component: TopicList,
  routes: [{
    path: '/topics/:id',
    component: TopicDetail
  }]
}, {
  path: '/todo-list',
  component: TodoList
}, {
  path: '*',
  component: NotFound
}];

export default routes;
