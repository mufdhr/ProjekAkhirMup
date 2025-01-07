import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SayProvider } from './pages/SayContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SayProvider>
      <App />
    </SayProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
