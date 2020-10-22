import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

class TodoViewComponent extends Component {
  constructor(props) {
    super(props);
    this.onToggleCompleted = this.onToggleCompleted.bind(this);
    this.onRename = this.onRename.bind(this);
  }

  onToggleCompleted() {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename() {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }

  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={this.onRename}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.onToggleCompleted}
        />
        {todo.task}
      </li>
    );
  }
}

TodoViewComponent.propTypes = {
  todo: PropTypes.object
};

const TodoView = observer(TodoViewComponent);

class TodoListComponent extends Component {
  constructor(props) {
    super(props);
    this.onNewTodo = this.onNewTodo.bind(this);
  }

  onNewTodo() {
    let result = prompt('Enter a new todo:', 'coffee plz');
    if (result) {
      this.props.todo.addTodo(result);
    }
  }

  render() {
    const store = this.props.todo;
    return (
      <div className="page--todo todo-list">
        {store.report}
        <ul>
          {store.todos.map((todo, idx) => (
            <TodoView todo={todo} key={idx} />
          ))}
        </ul>
        {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
        <button onClick={this.onNewTodo}>New Todo</button>
        <small>(double-click a todo to edit)</small>
      </div>
    );
  }
}

TodoListComponent.propTypes = {
  todo: PropTypes.object
};

const TodoList = inject('todo')(observer(TodoListComponent));


export default TodoList;
