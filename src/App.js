import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AppNavigation from './components/AppNavigation/AppNavigation'

import Home from './views/Home/Home'
import Map from './views/Map/Map'
import SingleEvent from './views/SingleEvent/SingleEvent'
import About from './views/About/About'
import Feedback from './views/Feedback/Feedback'
import Privacy from './views/Privacy/Privacy'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />       
            <Route exact path="/feedback" component={ Feedback } />      
            <Route exact path="/privacy" component={ Privacy } />                   
            <Route exact path="/mappa" component={ Map } />
            <Route exact path="/eventi/:id" render={(routeProps) => <SingleEvent {...routeProps} /> } />          
          <AppNavigation />
        </div>
      </Router>
    );
  }
}

export default App;
