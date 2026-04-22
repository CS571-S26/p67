
import { Image, Container, Button } from 'react-bootstrap'
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
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    useEffect(() => {
        props.contFunc(false);
    }, [])
    useEffect(() => {
        console.log("hi! " + diceStates.filter((val) => val === 6).length);
        if (diceStates.filter((val) => val === 5).length >= 6) props.contFunc(true);
    }, [diceStates])

    return (
        <div>
            <h2 style={{color:"white"}}>Measure your Luck</h2>
            <p style={{color:"white"}}>As part of our experiment, we would like to measure your luck with this game.</p>
            <p style={{color:"white"}}>Continue only when all dices are at 6.</p>
            <p style={{color:"white"}}>You may hold dice you have rolled.</p>
            <br/>
            <Container style={{marginBottom:40}}>
                {diceStates.map((val, ind) => 
                    <Container style={{justifyContent:"revert"}} key={ind}>
                        <Image src={diceImages[val]} alt="Dice image"/>
                        <Button variant={holdStates[ind] ? "danger" : "primary"} onClick={() => {
                            setHold(holdStates.map((e, index) => ind === index ? !e : e));
                        }}>
                            {holdStates[ind] ? " Held! " : " Rolling! "}
                        </Button>
                    </Container>
                )}
            </Container>
            <Button variant="primary" onClick={() => {
                setDice(diceStates.map((val, ind) => {
                    if (!holdStates[ind]) return Math.floor(Math.random() * 6);
                    return val;
                }));
            }}>
                Roll!
            </Button>
        {
            diceStates.filter((val) => val === 5).length >= 6
            ?
            <p style={{color:"#0f4"}}>Congratulations!</p>
            :
            <></>
        }
        </div>
    );
}

export default Lucky;