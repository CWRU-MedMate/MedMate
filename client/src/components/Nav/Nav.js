import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = () =>{
    return(
        <ul className="nav nav-pills flex-column sidebar" role="tablist">
             <li className="nav-item">
            <Link className="nav-link active" to="/home" >Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/dashboard" >Dashboard</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/add" >Add Medication</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/mymeds" >My Medication</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/vitals" >My Vitals</Link>
            </li>
        </ul>
    );
};
export default Nav;    