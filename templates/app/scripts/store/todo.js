import { makeObservable, observable, computed, action, autorun } from 'mobx';

class TodoStore {
  todos = [];
  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      todos: observable,
      pendingRequests: observable,
      uncompletedTodos: computed,
      completedTodosCount: computed,
      report: computed,
      addTodo: action
    });
  }

  get uncompletedTodos() {
    return this.todos.filter((todo) => todo.completed !== true);
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

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

autorun(() => {
  console.log(todoStore.report);
});

// Mock data
todoStore.addTodo('read MobX tutorial');
todoStore.addTodo('try MobX');
todoStore.todos[0].completed = true;
todoStore.todos[1].task = 'try MobX in own project';
todoStore.todos[0].task = 'grok MobX tutorial';

export default todoStore;
