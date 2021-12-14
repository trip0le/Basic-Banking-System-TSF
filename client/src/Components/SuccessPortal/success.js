import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './success.css';
import Success from '../Assets/success.svg';
import { useHistory } from "react-router-dom";

//success portal
const Successport = () => {
    const history = useHistory();

    const buttonHandler=(event)=>{
        if(event.target.value === 'home'){
            history.push('/');
        }else{
            history.push('/users')
        }

    };

    return ( 
        <div className="success-portal">
            <Card style={{ width: '25rem' }} className="success-card" bg="Light" text="dark" border="success">
                <Card.Body>
                    <Card.Img variant="top" src={Success} className="success"/>
                    <Card.Title className="mb-2 mx-auto my-2 success-title">Transaction Successful</Card.Title>
                    <Card.Text>
                        Click on the 'Home' button to navigate to Home page or else Click on 'More' button to make another transaction.  
                    </Card.Text>
                    <Row>
                        <Col className="success-buttons" size="lg" mr ='auto'>
                            <Button variant="success" value="home" onClick={(e)=>buttonHandler(e)}>Home</Button>
                        </Col>
                        <Col size="lg" className="success-buttons" mr='auto'>
                            <Button variant="success" value="more" onClick={(e)=>buttonHandler(e)}>More</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default Successport;