import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#app'),
  );
});
