import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import TodoList from './js/TodoList';
import reportWebVitals from './js/reportWebVitals';
// import ExampleCallback from './js/ExampleCallback';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    {/* <ExampleCallback/> */}
    <App />
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
