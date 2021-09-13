/* eslint-disable no-unused-vars */
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Errorpage from './components/Errorpage';

const App = () => {
  return (
      <>
        <Navbar/>

  { /*     <Route exact path="/">
           <Home/> 
        </Route>

        <Route path="/about">
           <About/> 
        </Route>

        <Route path="/contact">
           <Contact/> 
        </Route>

        <Route path="/login">
           <Login/> 
        </Route>

        <Route path="/signup">
           <Signup/> 
        </Route>
        
        <Route>
           <Errorpage/> 
        </Route>  */ }
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/contact" component={Contact} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/signup" component={Signup} />
           <Route component={Errorpage}/>
        </Switch>
        
      </>
  )
}

export default App
