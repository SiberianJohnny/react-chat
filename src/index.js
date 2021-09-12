import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const userName = 'User'

ReactDOM.render(
  <React.StrictMode>
    <App name={userName} showRed />
  </React.StrictMode>,
  document.getElementById('root')
);
