import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './landing';
import Detail from './detail';
import Results from './results';
import About from './about';
import Discover from './discover';
import TV from './tv';
import Movies from './movies';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/detail/:type/:id" component={Detail}/>
          <Route path="/results/:query" component={Results}/>
          <Route path="/about" component={About}/>
          <Route path="/discover" component={Discover}/>
          <Route path="/tv" component={TV}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/" component={Landing}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
