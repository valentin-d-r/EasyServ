import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes, 
} from 'react-router-dom'

import './App.css';

import Home from './front/Home.js';
import Profile from './front/Profile.js';
import MesDemandes from './front/Demandes.js';
import NotFound from './front/Erreur404.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <section>
              <h1> react-starter </h1>
              <h2> (React version 18.0.2) </h2>
            </section>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/front/Profile.js">Profile</Link></li>
                <li><Link to="/front/Demandes.js">MesDemandes</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/front/Profile.js" component={Profile} />
              <Route path="/front/Demandes.js" component={MesDemandes} />
              <Route exact path="*" component={NotFound} />
            </Routes>
          </main>
        </div>
      </Router >
    );
  }
}

export default App;