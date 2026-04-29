
import { Image, Container, Button, Card, Row, Col } from 'react-bootstrap'
import dice1 from '../assets/Dice1.png'
import dice2 from '../assets/Dice2.png'
import dice3 from '../assets/Dice3.png'
import dice4 from '../assets/Dice4.png'
import dice5 from '../assets/Dice5.png'
import dice6 from '../assets/Dice6.png'
import { useState, useEffect } from 'react';

function Lucky(props) {

    const [diceStates, setDice] = useState([0,0,0,0,0,0]);
    const [holdStates, setHold] = useState([false, false, false, false, false, false]);
    const [diceRollQuant, setDiceRollQuant] = useState(0);
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    useEffect(() => {
        props.contFunc(false);
    }, [])
    useEffect(() => {
        console.log("hi! " + diceStates.filter((val) => val === 6).length);
        if (diceStates.filter((val) => val === 5).length >= 6) {
            props.contFunc(true);
            if (localStorage.getItem("diceRollNeeded") == null) localStorage.setItem("diceRollNeeded", diceRollQuant);
        };
    }, [diceStates])

    return (
        <Container>
            <h2>Measure your Luck</h2>
            <p>As part of our experiment, we would like to measure your luck with this game.</p>
            <p>Continue only when all dices are at 6.</p>
            <p>You may hold dice you have rolled.</p>
            <br/>
            <Container style={{marginBottom:40}}>
                <Row xs={6}>
                    {diceStates.map((val, ind) => 
                        <Col key={ind}>
                            <Card style={{justifyContent:"revert", width:"8rem", height:"12rem", background:"rgb(209, 219, 235)", padding:10}}>
                                <Card.Img style={{marginBottom:10}} src={diceImages[val]} alt="Dice image"/>
                                <Button variant={holdStates[ind] ? "secondary" : "primary"} onClick={() => {
                                    setHold(holdStates.map((e, index) => ind === index ? !e : e));
                                }}>
                                    {holdStates[ind] ? " Held! " : " Rolling! "}
                                </Button>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        {
            diceStates.filter((val) => val === 5).length >= 6
            ?
            <h3 style={{color:"rgb(0, 180, 48)"}}>Congratulations!</h3>
            :
            <Button variant="primary" onClick={() => {
                setDiceRollQuant(e => e + 1);
                setDice(diceStates.map((val, ind) => {
                    if (!holdStates[ind]) return Math.floor(Math.random() * 6);
                    return val;
                }));
            }}>
                Roll!
            </Button>
        }
        </Container>
    );
}

export default Lucky;