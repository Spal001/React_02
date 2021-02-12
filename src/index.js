import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {add,sub,mul,div} from './Calc';


ReactDOM.render(
  <>
    <ul>
      <li>{add(50,30)}</li>
      <li>{sub(50,30)}</li>
      <li>{mul(50,30)}</li>
      <li>{div(50,30)}</li>
    </ul>
  </>,
  document.getElementById('root')
);
reportWebVitals();
