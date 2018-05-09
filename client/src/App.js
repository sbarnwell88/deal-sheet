import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
// import ProjectList from './components/ProjectList';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Home}/>
      </Router>
    );
  }
}

export default App;
