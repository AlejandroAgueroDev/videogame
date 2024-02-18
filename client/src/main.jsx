import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

reportWebVitals();

