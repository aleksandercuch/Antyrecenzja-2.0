import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import AboutMe from "./components/about/aboutMe"
import Stories from "./components/stories/stories"
import Reviews from "./components/reviews/reviews"
import CssBaseline from "@material-ui/core/CssBaseline";
import TextTemplate from "./components/Reusable/TextTemplate"
import Register from "./components/auth/Register"
import SignIn from "./components/auth/SignIn"
import ResetPassword from "./components/auth/Reset"
import LogOut from "./components/auth/LogOut"
import UploadText from "./components/addText/UploadText"
import EditText from "./components/editText/EditText"
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
          <Route exact path='/tekst/:id' component={TextTemplate} />  
          <Route exact path='/rejestracja' component={Register} /> 
          <Route exact path='/logowanie' component={SignIn} /> 
          <Route exact path='/wylogowywanie' component={LogOut} /> 
          <Route exact path='/add' component={UploadText} /> 
          <Route exact path='/edycja/:id' component={EditText} />
          <Route exact path='/reset' component={ResetPassword} />  
          <Footer /> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
