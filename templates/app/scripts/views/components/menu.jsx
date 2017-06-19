import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
class Menu extends Component {
  render() {
    return (
      <nav>
        <ul className="site-menu">
          {this.props.store.items.map((item, index) =>
            <li key={index}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Menu;
