
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
        <div style={styles.page}>
            <div style={styles.panel}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Measure your Luck</h2>
                    <p style={styles.subtitle}>As part of our experiment, we would like to measure your luck with this game.</p>
                    <p style={styles.subtitle}>Continue only when all dices are at 6. You may hold dice you have rolled.</p>
                </div>
    
                <div style={styles.body}>
                    <Container style={styles.diceContainer}>
                        <Row xs={1} sm={2} md={3} lg={6} style={styles.diceRow}>
                            {diceStates.map((val, ind) => 
                                <Col key={ind} style={styles.diceCol}>
                                    <Card style={holdStates[ind] ? styles.heldCard : styles.diceCard}>
                                        <Card.Img
                                            style={styles.diceImage}
                                            src={diceImages[val]}
                                            alt="Dice image"
                                        />
    
                                        <Button
                                            variant={holdStates[ind] ? "secondary" : "primary"}
                                            style={holdStates[ind] ? styles.heldButton : styles.rollingButton}
                                            onClick={() => {
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
                        <h3 style={styles.successText}>Congratulations!</h3>
                        :
                        <Button
                            variant="dark"
                            style={styles.rollButton}
                            onClick={() => {
                                setDiceRollQuant(e => e + 1);
                                setDice(diceStates.map((val, ind) => {
                                    if (!holdStates[ind]) return Math.floor(Math.random() * 6);
                                    return val;
                                }));
                            }}>
                            Roll!
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100%",
        background: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem",
        paddingTop: "5rem",
        boxSizing: "border-box"
    },

    panel: {
        width: "100%",
        maxWidth: "1050px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        textAlign: "left"
    },

    header: {
        background: "#111827",
        padding: "1.5rem 2rem",
        borderBottom: "1px solid #1f2937"
    },

    title: {
        margin: 0,
        color: "#ffffff",
        fontSize: "1.6rem",
        fontWeight: "700",
        letterSpacing: "0.3px"
    },

    subtitle: {
        margin: "0.35rem 0 0",
        color: "#d1d5db",
        fontSize: "0.95rem",
        lineHeight: "1.5"
    },

    body: {
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.75rem"
    },

    diceContainer: {
        width: "100%",
        padding: 0,
        margin: 0
    },

    diceRow: {
        width: "100%",
        margin: 0,
        rowGap: "1rem"
    },

    diceCol: {
        display: "flex",
        justifyContent: "center",
        padding: "0.5rem"
    },

    diceCard: {
        width: "8.5rem",
        height: "12rem",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "1rem",
        boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },

    heldCard: {
        width: "8.5rem",
        height: "12rem",
        backgroundColor: "#f9fafb",
        border: "2px solid #9ca3af",
        borderRadius: "16px",
        padding: "1rem",
        boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },

    diceImage: {
        width: "100%",
        maxWidth: "90px",
        height: "90px",
        objectFit: "contain",
        marginBottom: "0.75rem"
    },

    rollingButton: {
        width: "100%",
        borderRadius: "10px",
        fontWeight: "600",
        backgroundColor: "#111827",
        borderColor: "#111827"
    },

    heldButton: {
        width: "100%",
        borderRadius: "10px",
        fontWeight: "600",
        backgroundColor: "#6b7280",
        borderColor: "#6b7280"
    },

    rollButton: {
        backgroundColor: "#111827",
        borderColor: "#111827",
        padding: "0.75rem 2rem",
        borderRadius: "10px",
        fontWeight: "600",
        boxShadow: "0 10px 20px rgba(15, 23, 42, 0.15)"
    },

    successText: {
        color: "green",
        backgroundColor: "#ecfdf5",
        border: "1px solid green",
        borderRadius: "10px",
        padding: "0.75rem 1.25rem",
        fontSize: "1.15rem",
        fontWeight: "700",
        margin: 0
    }
};

export default Lucky;