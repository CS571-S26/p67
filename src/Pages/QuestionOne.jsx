import { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

function QuestionOne(prop) {

    const [buttonStates, setButtons] = useState();
    const [pressQuant, setPressQuant] = useState(0);

    useEffect(() => {
        let array = [];
        for(let i = 0; i < 5; i++){
            let inArray = [];
            for(let j = 0; j < 5; j++){
                inArray.push(false);
            }
            array.push(inArray);
        }
        setButtons(array);
        console.log("Heee Hooo");
        console.log(buttonStates);
    }, [])
    useEffect(() => {
        if(buttonStates == null) return;
        let total = 0;
        buttonStates.map((arr, i1) => arr.map((item, i2) => total += buttonStates[i1][i2] ? 1 : 0));
        prop.contFunc(total >= 24);
    }, [buttonStates])

  return (
    <div>
        <h2 style={{color:"#fff"}}>Before we start...</h2>
        <br/>
        <p style={{color:"#fff"}}>Please fill in up to all but one button to confirm your participation.</p>
        <div style={{justifySelf:"center", width:"35vw"}}>
            <Container>
                {buttonStates == null ? <></> : buttonStates.map((ar, index1) => {
                    return <Row key={"Row " + index1} xs={5}>
                        {ar.map((state, index2) => {
                            return <Col key={"Col " + index2}>
                                <Button variant={buttonStates[index1][index2] ? "primary" : "danger"} onClick={() => {
                                    setButtons(buttonStates.map((arr, i1) => arr.map((item, i2) => Math.abs(i1 - index1) + Math.abs(i2 - index2) <= 1 ? !item : item)));
                                    setPressQuant(e => e + 1);
                                    }}>
                                    {buttonStates[index1][index2] ? " On! " : " Off! "}
                                </Button>
                            </Col>
                        })}
                    </Row>
                })}
            </Container>
            <br/>
            {
                pressQuant > 20
                ?
                <Button variant="primary" onClick={() => {
                    setButtons(buttonStates.map((arr, i1) => arr.map((item, i2) => true)));
                    setPressQuant(e => e + 1);
                    }}>
                    Skip
                </Button>
                :
                <></>
            }
        </div>
    </div>
  )
}

export default QuestionOne;