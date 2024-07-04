import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from './utils/Context';
import { useState } from'react';
import { InputProvider } from './utils/inputContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // {const [inputValue, setInputValue] = useState('')}
  <InputProvider>
    <Context >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </InputProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
