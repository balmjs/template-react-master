import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class TodoList extends Component {
  onReset = () => {
    this.props.store.todoList.resetTimer();
  }

  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.store.todoList.timer}
        </button>
        { this.props.store.DEBUG && <DevTools /> }
      </div>
    );
  }
};

export default TodoList;
