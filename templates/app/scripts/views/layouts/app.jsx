import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink as Link, Route, Switch } from 'react-router-dom';
import routes from '../../routers';
import RouteWithSubRoutes from '../../routers/config';
import store from '../../store';
import MyMenu from '../components/menu';
import Home from '../home';

class App extends Component {
  constructor(props) {
    super(props);

    this.logo = require('../../../images/logo.svg');
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={this.logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">thx <a href="//balmjs.com/">BalmJS</a></p>
        <hr />
        <Router>
          <div className="container">
            <MyMenu store={store.menu} />
            <Switch>
              <Route exact path="/" component={Home} />
              {routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
