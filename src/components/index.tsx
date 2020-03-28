/*global chrome*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// ReactDOM.render(<App />,document.getElementById('root'));
chrome.tabs.query({ active: true, currentWindow: true }, tab => {
  ReactDOM.render(<App />, document.getElementById('root'));
});