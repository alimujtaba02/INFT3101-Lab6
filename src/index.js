// frontend/src/index.js
import React from 'react';       // Import React library
import ReactDOM from 'react-dom'; // Import ReactDOM to render the app
import './App.css';            // Import the global CSS file (optional)
import App from './App';          // Import the main App component
import reportWebVitals from './reportWebVitals';  // (optional) For performance tracking

// ReactDOM.render is used to render the root App component into the DOM element with id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Your main App component */}
  </React.StrictMode>,
  document.getElementById('root')  // Renders the app into the 'root' element of the HTML
);

// (optional) You can use reportWebVitals for measuring app performance
reportWebVitals();
