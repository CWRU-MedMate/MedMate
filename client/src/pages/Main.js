import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from '../components/Grid/Container';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Dashboard from './Main/Main-dashboard';
import Addmed from './Main/Main-add';
import Mymeds from './Main/Main-meds';
import Vitals from './Main/Main-vitals';


class Main extends React.Component{
  
  
  render(){
    return(
      <Router>
  <div>
  
      
    <Header />    
        <Container cont='container-fluid'>
            <Row>
              <Col colSize='col-lg-3'>
                <Nav />
              </Col>
              <Col colSize='col-lg-9'>
            
                <Switch>
                      <Route path="/dashboard" component={Dashboard} />
                      <Route path="/add" component={Addmed} />
                      <Route path="/mymeds" component={Mymeds} />
                      <Route path="/vitals" component={Vitals} />
                </Switch>
                
              </Col>  
            </Row>
        </Container>
             
    </div>
    </Router>
    )
  }
};



export default Main;