import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import routes from '../../routes';
import RouteWithSubRoutes from '../../routes/config';
import store from '../../store';
import { asyncComponent } from '../../helpers';
const MyMenu = asyncComponent(() => import('../components/menu'));
const Home = asyncComponent(() => import('../home'));
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
