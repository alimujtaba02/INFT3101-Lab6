// frontend/src/index.js
import React from 'react';       // Import React library
import ReactDOM from 'react-dom'; // Import ReactDOM to render the app
import App from './App.js';          // Import the main App component
import reportWebVitals from './reportWebVitals';  // (optional) For performance tracking

// ReactDOM.render is used to render the root App component into the DOM element with id "root"
ReactDOM.render(
  <App />, // Remove React.StrictMode for testing
  document.getElementById('root')
);

// (optional) You can use reportWebVitals for measuring app performance
reportWebVitals();
