import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink as Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import routes from '../../routers';
import RouteWithSubRoutes from '../../routers/config';
import store from '../../store';
import MyMenu from '../components/menu';
import Home from '../home';
import logo from '../../../images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">thx <a href="//balmjs.com/">BalmJS</a></p>
        <hr />
        <Provider {...store}>
          <Router>
            <div className="container">
              <MyMenu />
              <Switch>
                <Route exact path="/" component={Home} />
                {routes.map((route, index) => (
                  <RouteWithSubRoutes key={index} {...route} />
                ))}
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
