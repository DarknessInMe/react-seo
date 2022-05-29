import React from 'react';
import {
  HashRouter as Router,
  Routes ,
  Route,
} from 'react-router-dom';
import { Users } from './Users';
import { Home } from './Home';
import { About } from './About';
import { hydrate, render } from "react-dom";
 
const App = (
  <React.StrictMode>
    <Router>
      <Routes >
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route exact path="/" element={<Home />} />
      </Routes >
    </Router>
  </React.StrictMode>
)

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(App, rootElement);
} else {
  render(App, rootElement);
}

