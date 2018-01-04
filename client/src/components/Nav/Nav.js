import React from 'react';
import "./nav.css";

const Nav = () =>{
    return(
        <ul className="nav nav-pills flex-column sidebar">
            <li className="nav-item">
            <a className="nav-link active" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/add">Add Medication</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/mymeds">My Medication</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/vitals">My Vitals</a>
            </li>
        </ul>
    );
};
export default Nav;    