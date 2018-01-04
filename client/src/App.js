import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';



const App = () =>
  
  
     <Router>
       <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/main" component={Main}/>
        </Switch>
       </div>   
      </Router>   
    
    
  


export default App;
