import { observable } from 'mobx';

class TodoList {
  @observable timer = 0;

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

const todoListState = new TodoList();

export default todoListState;
