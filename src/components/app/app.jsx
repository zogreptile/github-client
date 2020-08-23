import React from 'react';
import { Provider } from "react-redux";
import { HashRouter, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/main';

import Home from 'src/pages/home';
import User from 'src/pages/user';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter >
      <MainLayout>
        <Route exact path='/' component={Home} />
        <Route path='/:username' component={User} />
      </MainLayout>
    </HashRouter >
  </Provider>
);

export default App;
