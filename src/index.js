import React from 'react';
import ReactDOM from 'react-dom/client';  // Use react-dom/client
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(
    <App />
);

reportWebVitals();  // Optional performance measurement
