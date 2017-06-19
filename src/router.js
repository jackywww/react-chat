import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ClientPage from './routes/ClientPage';
import ChatPage from './routes/ChatPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/client" component={ClientPage} />
      <Route path="/chat" component={ChatPage} />
    </Router>
  );
}

export default RouterConfig;
