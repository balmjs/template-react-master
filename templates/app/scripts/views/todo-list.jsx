import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';

@observer
class TodoList extends Component {
  componentDidMount() {
    const todoStore = this.props.store.todo;
    // mock data
    todoStore.addTodo("read MobX tutorial");
    todoStore.addTodo("try MobX");
    todoStore.todos[0].completed = true;
    todoStore.todos[1].task = "try MobX in own project";
    todoStore.todos[0].task = "grok MobX tutorial";
  }

  render() {
    const store = this.props.store.todo;
    return (
      <div>
        { store.report }
        <ul>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
        </ul>
        { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small>(double-click a todo to edit)</small>
        {/*<DevTools />*/}
      </div>
    );
  }

  onNewTodo = () => {
    this.props.store.todo.addTodo(prompt('Enter a new todo:', 'coffee plz'));
  }
}

@observer
class TodoView extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type="checkbox"
          checked={ todo.completed }
          onChange={ this.onToggleCompleted }
        />
        { todo.task }
        ({todo.completed})
      </li>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}

export default TodoList;
