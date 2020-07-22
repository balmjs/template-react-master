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
          name: 'Demo',
          url: '/demo'
        },
        {
          name: 'Todo Demo',
          url: '/todo-demo'
        }
      ]
    };
  });
}
