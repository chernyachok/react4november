import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './componentsRouter/Navbar';
import Home from './componentsRouter/Home';
import About from './componentsRouter/About';
import Contact from './componentsRouter/Contact';
import Posts from './componentsRouter/Posts';


class App extends Component{
  constructor(){
    super()
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact  path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:id' component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
