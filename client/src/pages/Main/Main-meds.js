import React, { Component } from 'react';

class Mymeds extends React.Component{
 state = {
     meds: []
 }

 componentDidMount(){
     fetch('http://localhost:8080/api/meds')
        .then((response) =>{
            console.log(response);
            this.setState({meds: response.data})
        })
 }

    render(){ 
         return (
             <h1>Testing my meds</h1>
         )
     } 
 }
 

export default Mymeds;