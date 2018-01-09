import React, { Component } from "react";
import "../components/Jumbotron/jumbotron.css";
import logo2 from '../components/Jumbotron/redcheck.png';
import Login from '../components/Jumbotron/Modals/Login';
import Signup from '../components/Jumbotron/Modals/Signup';

class LoginSignup extends React.Component {
  render() {
    return(
        <div>
            <div className="jumbotron" id="jumboHome">
                <div className="container-fluid">
                <h1 id="heading">MedMate <img id="logoHome" src={logo2} alt="" height="200" width="150"/></h1> 
                <h4 id="subheading">We remember so you don't have to!</h4>
                <button type="button" className="btn btn-outline-light btn-home" data-toggle="modal" data-target="#login">Login</button> 
                <button type="button" className="btn btn-outline-light btn-home" data-toggle="modal" data-target="#signup">Sign up</button>
                </div> 
            </div>
            <Login login={this.props.login}/>
            <Signup login={this.props.login}/>
        </div>
    );
  }
}

export default LoginSignup;
