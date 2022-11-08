import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Calculator.css';
import NavigationMenu from './modules/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationMenu />
    </BrowserRouter>
  </React.StrictMode>,
);
