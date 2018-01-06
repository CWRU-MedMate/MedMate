import React, { Component } from 'react';
import Container from '../../components/Grid/Container';
import Col from '../../components/Grid/Col';
import Row from '../../components/Grid/Row';
import Form from '../../components/Form/Form';
import axios from 'axios';


class Addmed extends React.Component{



   render(){ 
        return (
            <Container cont="container">
                <Row>
                    <Col colSize="col-lg-12">
                        <Form />
                    </Col>
                </Row>    
            </Container>    
        )
    } 
}

export default Addmed;