import React, { useState } from 'react';
import './App.css';
import './Contact.css';
// import './body.css';
import Nav from './component/Nav';
import Typewriter from 'typewriter-effect';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Project from './component/Project';
// Import component
const App = props => {
  
  return(
    <Router>
    <div className="container"> 
    <Nav/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/resume">
              <Resume/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
        </Switch>
      </div>
    </div>
    {/* <Footer/> */}

    </Router>
  )
  }
export default App;
