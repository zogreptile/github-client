import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from '../pages/Index'
import User from '../pages/User'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <>
        <Route exact path='/' component={Index} />
        <Route path='/userpage/:username' component={User} />
      </>
    </Router>
  </Provider>
);

export default App;
