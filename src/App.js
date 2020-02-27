import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import AboutMe from "./components/about/aboutMe"
import Stories from "./components/stories/stories"
import Reviews from "./components/reviews/reviews"
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='pageContainer'>
        <BrowserRouter>
          <CssBaseline />
          <Navbar /> 
          <Route exact path='/' component={Home} /> 
          <Route exact path='/omnie' component={AboutMe} />
          <Route exact path='/teksty' component={Stories} />  
          <Route exact path='/recenzje' component={Reviews} />  
          <Footer /> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
