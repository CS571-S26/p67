import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

function QuestionAboutYou(prop) {

    const [showWarning, setWarning] = useState(false);
    const [showSuccess, setSuccess] = useState(false);
    const [warningMessage, setWarningMess] = useState("");
    const [name, setInputName] = useState("");
    const [age, setAge] = useState(0);
    const [cheese, setCheese] = useState(0);

    useEffect(() => {
        prop.contFunc(false);
    }, [])

  return (
    <div>
        <h2>Personal Information</h2>
        <br/>
        <p>Please fill in your personal data to help our research efforts.</p>
        <Form>
            <Form.Group style={{justifyItems:"center"}} >
                <Form.Label>Your Name</Form.Label>
                <Form.Control style={{width:"40%"}} onChange={(e) => setInputName(e.target.value)}/>
                
                <Form.Label>Year of Birth</Form.Label>
                <Form.Control style={{width:"40%"}} type='number' onChange={(e) => setAge(e.target.value)}/>
                
                <Form.Label>The quantity of cheese you have consumed</Form.Label>
                <Form.Control style={{width:"40%"}} type='number' onChange={(e) => setCheese(e.target.value)}/>
            </Form.Group>
        </Form>

        <br/>
        {
            showWarning && !showSuccess
            ?
            <p style={{color:"#d00"}}>{warningMessage}</p>
            :
            <></>
        }
        {
            showSuccess
            ?
            <p style={{color:"rgb(0, 180, 48)"}}>You have been registered!</p>
            :
            <></>
        }
        <Button onClick={() => {
            if (localStorage.getItem("userData") == null){
                setWarning(true);
                setWarningMess("Do you know who you are?");
                return;
            }
            const data = JSON.parse(localStorage.getItem("userData"));
            if (data.name != name){
                setWarning(true);
                setWarningMess("That is NOT your name.");
                return;
            }
            if (2026 - data.age != age){
                setWarning(true);
                setWarningMess("You were NOT born at that year.");
                return;
            }
            if (data.cheese != cheese){
                setWarning(true);
                setWarningMess(data.cheese < cheese ? "You didn't eat THAT much cheese." : "C'mon, you love cheese.");
                return;
            }
            console.log("Success!");
            setWarning(false);
            setSuccess(true);
            prop.contFunc(true);
        }}>
            Submit
        </Button>
    </div>
  )
}

export default QuestionAboutYou;