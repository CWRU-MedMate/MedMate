import React from 'react';
import "./nav.css";

const Nav = () =>
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className="nav-link" href="test.com">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="test.com">Add Medication</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="test.com">My Medication</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="test.com">My Vitals</a>
        </li>
    </ul>

export default Nav;    