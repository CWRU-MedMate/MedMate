import React, { Component } from "react";
import "./jumbotron.css";
import logo2 from './redcheck.png';
import Login from './Modals/Login';
import Signup from './Modals/Signup';


class Jumbotron extends React.Component {
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
        <Login />
        <Signup />
    </div>
);
  };
};


export default Jumbotron;



