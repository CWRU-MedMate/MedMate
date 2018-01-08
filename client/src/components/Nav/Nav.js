import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = () =>{
    return(
        <ul className="nav nav-pills flex-column sidebar" role="tablist">
             <li className="nav-item">
            <Link className="nav-link active" to="/home" data-toggle="pill">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/dashboard" data-toggle="pill">Dashboard</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/add" data-toggle="pill">Add Medication</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/mymeds" data-toggle="pill">My Medication</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/vitals" data-toggle="pill">My Vitals</Link>
            </li>
        </ul>
    );
};
export default Nav;    