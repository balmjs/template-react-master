import menu from './menu';
import todo from './todo';

const DEBUG = process.env.NODE_ENV !== 'production';

export default {
  DEBUG,
  menu,
  todo
};
