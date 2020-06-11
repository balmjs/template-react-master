export function getBase(server) {
  server.get('/menu', () => {
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
