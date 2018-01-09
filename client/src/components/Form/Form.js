import React, { Component } from 'react';
import TextInput from "../Input/TextInput";
import './form.css';
import axios from 'axios';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          medForm: {
            name: "",
            dose: "",
            frequency: "",
            times: "",
            start: "",
            instructions: "",
            count: "",
            user: "",
          }
        };
        this.inputChange.bind(this);
      }
      addNewMed = () => {
        console.log("adding med..");
        
        axios.post("http://localhost:8080/api/meds", {
          med_name: this.state.medForm.name,
          med_dose: this.state.medForm.dose,
          freq_main: this.state.medForm.frequency,
          freq_times: this.state.medForm.times,
          start_date: this.state.medForm.start,
          instructions: this.state.medForm.instructions,
          initial_count: this.state.medForm.count,
          user: this.state.medForm.user
        }).then((response)=>{
          console.log(response);
        });
      };

      inputChange = (inputId, inputValue) => {
        const form = this.state.medForm;
        form[inputId] = inputValue;
        this.setState({ medForm: form });
      };
    
    render(){
    return(
    <div className="wrapper">    
        <h2 id="addHead">Add a Medication:</h2>
        <form id="med-manager">
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <TextInput placeholder="Name of Medication" htmlId="name" inputChange={this.inputChange}/>
            <br />
            <label htmlFor="dose">Dose:</label>
            <TextInput placeholder="Dosage" htmlId="dose" inputChange={this.inputChange}/>
            <br />
            <label htmlFor="frequency">Frequency: (Daily, Weekly, Monthly, etc.) </label>
            <TextInput placeholder="Frequency" htmlId="frequency" inputChange={this.inputChange}/>
            <br />
            <label htmlFor="times">Times: (Integer) </label>
            <TextInput placeholder="Times" htmlId="times" inputChange={this.inputChange}/>
            <br />
            <label htmlFor="start">Start Date:</label>
            <TextInput placeholder="Start Date" htmlId="start" inputChange={this.inputChange}/>
            <br />
            <label htmlFor="instructions">Instructions:</label>
            <TextInput placeholder="Instructions" htmlId="instructions" inputChange={this.inputChange}/>
            <br />
            <label htmlFor="count">Count:</label>
            <TextInput placeholder="Count" htmlId="count" inputChange={this.inputChange}/>
            <br />
            <div className="form-group">
                <label htmlFor="user">User:</label>
                <TextInput htmlId="user" inputChange={this.inputChange}/>
            </div>
            <br />
            <button type="button" className="btn btn-success submit" onClick={this.addNewMed} >Submit</button>
        </div>
    </form>
 </div>   

    )
} 
}


export default Form;