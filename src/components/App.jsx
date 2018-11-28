import React from 'react';
import { Provider } from "react-redux";
import { HashRouter, Route } from 'react-router-dom'
import Index from '../pages/Index'
import User from '../pages/User'

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter >
      <>
        <Route exact path='/' component={Index} />
        <Route path='/:username' component={User} />
      </>
    </HashRouter >
  </Provider>
);

export default App;
