import React from 'react';
import './header.css';
import  check  from './headlogo.png';
const Header = () => {
    return (
        <div className="jumbotron" id="jumboHead">
            <div className="container-fluid">
            <h1 id="headMain">MedMate <img id="logoHead" src={check} alt="" height="200" width="150"/></h1> 
            </div>
        </div>     
    )
};

export default Header;