import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from '../pages/Index'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Index} />
    </Router>
  </Provider>
);

export default App;
