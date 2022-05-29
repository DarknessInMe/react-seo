import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Users } from './Users';
import { Home } from './Home';
import { About } from './About';
import { hydrate, render } from "react-dom";
 
const App = (
  <React.StrictMode>
    <Router>
      <Routes >
        <Link to='/about' />
        <Link to='/users' />
        <Link to='/' />
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

