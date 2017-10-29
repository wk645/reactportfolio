import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
// import Box from './components/Box';
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Projects from './components/Projects'

class App extends Component {

  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div>
      <Navbar />
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/aboutme' render={() => <AboutMe />} />
      <Route exact path='/projects' render={() => <Projects />} />
      <Route exact path='/contact' render={() => <Contact />} />

      </div>
    );
  }
}

export default App;
