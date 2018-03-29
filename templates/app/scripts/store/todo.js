import { observable, computed, autorun } from 'mobx';

class TodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed
  get uncompletedTodos() {
    return this.todos.filter(todo => todo.completed !== true);
  }

  @computed
  get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed
  get report() {
    let result =
      this.uncompletedTodos.length === 0
        ? '<none>'
        : `Next todo: "${this.uncompletedTodos[0].task}". ` +
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

// Mock data
todoStore.addTodo('read MobX tutorial');
todoStore.addTodo('try MobX');
todoStore.todos[0].completed = true;
todoStore.todos[1].task = 'try MobX in own project';
todoStore.todos[0].task = 'grok MobX tutorial';

export default todoStore;
