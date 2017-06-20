import Home from '../views/home';
import TodoList from '../views/todo-list';
import NotFound from '../views/not-found';

// TODO: code is so ugly :(
// import React from 'react';
// import Bundle from '../bundle';
// import loadHome from 'bundle-loader!../views/home';
// import loadTodoList from 'bundle-loader!../views/todo-list';
// import loadNotFound from 'bundle-loader!../views/not-found';

// const Home = () => (
//   <Bundle load={loadHome}>
//     {(Home) => <Home />}
//   </Bundle>
// );
// const TodoList = (props) => (
//   <Bundle load={loadTodoList}>
//     {(TodoList) => <TodoList {...props} />}
//   </Bundle>
// );
// const NotFound = () => (
//   <Bundle load={loadNotFound}>
//     {(NotFound) => <NotFound />}
//   </Bundle>
// );

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
