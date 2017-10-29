import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Title from './components/Title'
import Box from './components/Box';
import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Contact from './components/Contact'

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
      <Route exact path='/aboutme' render={() => <Bio />} />
      <Route exact path='/' render={() => <Title />} />
      <Route exact path='/projects' render={() => <Box />} />
      <Route exact path='/contact' render={() => <Contact />} />

      </div>
    );
  }
}

export default App;
