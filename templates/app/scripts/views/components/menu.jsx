import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink as Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

class MenuComponent extends Component {
  render() {
    return (
      <nav>
        <ul className="site-menu">
          {this.props.menu.items.map((item, index) => (
            <li key={index}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

MenuComponent.propTypes = {
  menu: PropTypes.object
};

const Menu = inject('menu')(observer(MenuComponent));

// NOTE: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(Menu);
