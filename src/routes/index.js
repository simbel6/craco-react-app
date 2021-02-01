import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import la from './loadableComponent';
import NoMatch from '../components/404';

const history = createBrowserHistory();

// const Login = () => import('views/Login')
const User = () => import('views/User');
// const BaseLayout = () => import('../components/Layout/BaseLayout')

export default () => (
  <Router history={history}>
    <Switch>
      <Route path='/' component={la(User)} key='first' exact />
      {/* <Route path="/login" component={la(Login)} key="login" /> */}
      {/* <Route path="/app" component={la(BaseLayout)} key="app" /> */}
      <Route component={NoMatch} />
    </Switch>
  </Router>
);
