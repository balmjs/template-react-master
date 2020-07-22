import { asyncComponent } from '@/helpers';
const TopicList = asyncComponent(() => import('@/views/demo/list'));
const TopicDetail = asyncComponent(() => import('@/views/demo/detail'));
const TodoList = asyncComponent(() => import('@/views/demo/todo-list'));

let topicRoutes = [
  {
    path: '/demo',
    component: TopicList,
    routes: [
      {
        path: '/demo/:id',
        component: TopicDetail
      }
    ]
  },
  {
    path: '/todo-demo',
    component: TodoList
  }
];

export default topicRoutes;
