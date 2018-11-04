import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { initializeStore } from 'app/js/api';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  // TODO remove it when api is ready
  initializeStore();
  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  );
});
