import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('DEBUG', 'todo')
@observer
class TodoList extends Component {
  render() {
    const store = this.props.todo;
    return (
      <div className="page--todo todo-list">
        { store.report }
        <ul>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
        </ul>
        { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small>(double-click a todo to edit)</small>
        { this.props.DEBUG && <DevTools /> }
      </div>
    );
  }

  onNewTodo = () => {
    this.props.todo.addTodo(prompt('Enter a new todo:', 'coffee plz'));
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
