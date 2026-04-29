import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

function QuestionContactUs(prop) {

    if (localStorage.getItem("contactData") == null){
        let first = Math.floor(Math.random() * 10000000000);
        let second = Math.floor(Math.random() * 10000000000);
        second = second === first ? (second + 23470923) % 10000000000 : second;
        let third = Math.floor(Math.random() * 10000000000);
        third = third === second ? (third + 123646789) % 10000000000 : third;
        let fourth = Math.floor(Math.random() * 10000000000);
        fourth = fourth === third ? (fourth + 34656) % 10000000000 : fourth;
        let fifth = Math.floor(Math.random() * 10000000000);
        fifth = fifth === fourth ? (fifth + 973271) % 10000000000 : fifth;
        localStorage.setItem("contactData", JSON.stringify({
            answer: fifth,
            initial: first,
            transitions: [
                {
                    from: first,
                    to: second
                },
                {
                    from: second,
                    to: third
                },
                {
                    from: third,
                    to: fourth
                },
                {
                    from: fourth,
                    to: fifth
                },
            ]
        }))
    }

    const contactData = JSON.parse(localStorage.getItem("contactData"));
    const answer = contactData.answer;
    const [showWarning, setWarning] = useState(false);
    const [showSuccess, setSuccess] = useState(false);
    const [warningMessage, setWarningMess] = useState("");
    const [numberGuess, setNumber] = useState();

    useEffect(() => {
        prop.contFunc(false);
    }, [])

  return (
    <div>
        <h2 style={{color:"#fff"}}>Our Information</h2>
        <br/>
        <p style={{color:"#fff"}}>Please fill in with some of our information.</p>
        <p style={{color:"#fff"}}>If you have trouble finding our infomation, just contact us!</p>
        <p style={{color:"#fff"}}>First was {contactData.initial}, use the outputs as inputs and give us</p>
        <br/>
        <p style={{color:"#f00", whiteSpace:"pre"}} >t h e   f i f t h   n u m b e r .</p>
        <br/>
        <Form>
            <Form.Group style={{justifyItems:"center"}} >
                <Form.Label style={{color:"#f00", whiteSpace:"pre"}}>T h e   n u m b e r :</Form.Label>
                <Form.Control style={{width:"40%"}} type='number' onChange={(e) => setNumber(e.target.value)}/>
            </Form.Group>
        </Form>

        <br/>
        {
            showWarning && !showSuccess
            ?
            <p style={{color:"#d00", whiteSpace:"pre"}}>{warningMessage}</p>
            :
            <></>
        }
        {
            showSuccess
            ?
            <p style={{color:"#0f4"}}>Thank you for the information!</p>
            :
            <></>
        }
        <Button onClick={() => {
            console.log(numberGuess);
            if (numberGuess == null){
                setWarning(true);
                setWarningMess("W H E R E   I S   T H E   N U M B E R ?");
                return;
            }
            if (numberGuess != answer){
                setWarning(true);
                setWarningMess("W R O N G   N U M B E R .");
                return;
            }
            setWarning(false);
            setSuccess(true);
            prop.contFunc(true);
        }}>
            Submit
        </Button>
    </div>
  )
}

export default QuestionContactUs;