import { Server } from 'miragejs';
import { isDev } from '@/config';

if (isDev) {
  const ApiRegExp = /^\/api\//;

  const server = new Server({
    routes() {
      this.namespace = '/api';

      this.get('/menu', () => {
        return {
          code: 200,
          message: 'OK',
          data: [
            {
              name: 'Home',
              url: '/home'
            },
            {
              name: 'Topic',
              url: '/topics'
            },
            {
              name: 'Todo List',
              url: '/todo-list'
            }
          ]
        };
      });
    }
  });

  server.passthrough((request) => {
    return !ApiRegExp.test(request.url);
  });
}
