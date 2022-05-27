import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Routes ,
  Route,
} from 'react-router-dom';
import { Users } from './Users';
import { Home } from './Home';
import { About } from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes >
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes >
    </Router> */}
    <Users />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();