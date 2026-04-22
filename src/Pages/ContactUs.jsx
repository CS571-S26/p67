
import { Image, Form, Button } from 'react-bootstrap'
import you from '../assets/DefaultPortrait.jpg'
import { useState } from 'react';

function Contact(props) {

    const [givenNum, setGivenNum] = useState(0);
    const [answerNum, setAnswerNum] = useState(-1);

    return (
        <div>
            <h2 style={{color:"white"}}>Contacting Us</h2>
            <p style={{color:"white"}}>We do not have a phone number or email.</p>
            <p style={{color:"white"}}>You can send us a number and we'll respond with another number.</p>
            <p style={{color:"white"}}>What's the relation between the numbers?</p>
            <p style={{color:"white"}}>¯\_(ツ)_/¯</p>
            <br/>        
            <Form>
                <Form.Group style={{justifyItems:"center"}} >
                    <Form.Label style={{color:"#fff"}}>Give Us a Number!</Form.Label>
                    <Form.Control style={{width:"40%"}} type='number' onChange={(e) => setGivenNum(e.target.value)}/>
                </Form.Group>
            </Form>
            <br/>       
            <Form>
                <Form.Group style={{justifyItems:"center"}} >
                    <Form.Label style={{color:"#fff"}}>Answer</Form.Label>
                    <Form.Control style={{width:"40%"}} value={answerNum} type='number' disabled readOnly/>
                </Form.Group>
            </Form>  
            <br/> 
            <Button variant="primary" onClick={() => {
                setAnswerNum(Math.floor(Math.random() * 10000000000));
            }}>
                Submit
            </Button>
        </div>
    );
}

export default Contact;