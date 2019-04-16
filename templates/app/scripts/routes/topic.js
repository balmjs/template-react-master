import { asyncComponent } from '@/helpers';
const TopicList = asyncComponent(() => import('@/views/topic/list'));
const TopicDetail = asyncComponent(() => import('@/views/topic/detail'));

let topicRoutes = [
  {
    path: '/topics',
    component: TopicList,
    routes: [
      {
        path: '/topics/:id',
        component: TopicDetail
      }
    ]
  }
];

export default topicRoutes;
