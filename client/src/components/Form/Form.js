import React, { Component } from 'react';
import './form.css';

class Form extends React.Component{
    
    
    render(){
    return(
    <div className="wrapper">    
        <h2 id="addHead">Add a Medication:</h2>
        <form id="med-manager">
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input placeholder="Name of Medication" type="text" className="form-control" id="name"/>
            <br />
            <label htmlFor="dose">Dose:</label>
            <input placeholder="Dosage" type="text" className="form-control" id="dose"/>
            <br />
            <label htmlFor="frequency">Frequency: (Daily, Weekly, Monthly, etc.) </label>
            <input placeholder="Frequency" type="text" className="form-control" id="frequency"/>
            <br />
            <label htmlFor="times">Times: (Integer) </label>
            <input placeholder="Times" type="text" className="form-control" id="times"/>
            <br />
            <label htmlFor="start">Start Date:</label>
            <input placeholder="Start Date" type="text" className="form-control" id="start"/>
            <br />
            <label htmlFor="instructions">Instructions:</label>
            <input placeholder="Instructions" type="text" className="form-control" id="instructions"/>
            <br />
            <label htmlFor="count">Count:</label>
            <input placeholder="Count" type="text" className="form-control" id="count"/>
            <br />
            <div className="form-group">
                <label htmlFor="category">Select User:</label>
                <select className="form-control" id="user">
              </select>
            </div>
            <br />
            <button type="submit" className="btn btn-success submit">Submit</button>
        </div>
    </form>
 </div>   

    )
} 
}


export default Form;