import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./layout/layout.scss"
import "./layout/all.scss"
import "./layout/typography.scss"
import "./layout/rest.scss"
import "./javascript/test.scss"
// import "./layout/5e/scss/import.scss"
// import "./layout/5e/scss/bootstrap.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
