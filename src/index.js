import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from 'src/components/app';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
