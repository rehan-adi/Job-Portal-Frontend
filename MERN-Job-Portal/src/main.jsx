import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Router> {/* Wrap your App component with Router */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
);
