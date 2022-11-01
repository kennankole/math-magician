import React from 'react';
import ReactDOM from 'react-dom/client';
import './Calculator.css';
import Calculator from './modules/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
);
