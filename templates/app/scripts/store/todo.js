import {
  observable,
  computed,
  autorun
} from 'mobx';

class TodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed get uncompletedTodos() {
    return this.todos.filter(todo => todo.completed !== true);
  }

  @computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  @computed get report() {
    let result = (this.uncompletedTodos.length === 0) ?
      '<none>' :
      `Next todo: "${this.uncompletedTodos[0].task}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    return result;
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false
    });
  }
}

const todoStore = new TodoStore();

export default todoStore;
