import React, { lazy } from 'react';
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/Router';
import Redirect from 'react-router-dom/Redirect';
import history from '../utils/history';

const SignUp = lazy(() => import('../page/signup'));

export default () => (
  <Router history={history}>
    <Route path="/register" component={SignUp} />
    <Redirect to="/register" />
  </Router>
);
