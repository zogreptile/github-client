import React from 'react';
import { Provider } from "react-redux";
import { HashRouter, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import 'semantic-ui-css/semantic.min.css';
import '../styles/app.css';
import Index from '../pages/Index';
import User from '../pages/User';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter >
      <Layout>
        <Route exact path='/' component={Index} />
        <Route path='/:username' component={User} />
      </Layout>
    </HashRouter >
  </Provider>
);

export default App;
