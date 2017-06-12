import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ClientPage from './routes/ClientPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/client" component={ClientPage} />
    </Router>
  );
}

export default RouterConfig;
