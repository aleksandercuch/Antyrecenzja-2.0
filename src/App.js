import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
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
          <Container maxWidth="lg">
            
          </Container>
          <Footer /> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
