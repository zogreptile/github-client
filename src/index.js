import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from 'src/components/app';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
