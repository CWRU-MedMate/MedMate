import React from 'react';
import Container from '../components/Grid/Container';
import Row from '../components/Grid/Row';
import Col from '../components/Grid/Col';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';


const Main = () =>{
  return(
  <div>
    <Header />    
        <Container>
            <Row>
              <Col colSize="col-sm-4">
                    <h1>Butts n stuff</h1>
              </Col>  
            </Row>
        </Container>    
    </div>
  )    
}



export default Main;