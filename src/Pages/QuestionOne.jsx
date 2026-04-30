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
        if (total >= 24){
            if (localStorage.getItem("q1Presses") == null){
                localStorage.setItem("q1Presses", pressQuant.toString());
            }
        }
    }, [buttonStates])

    return (
        <div style={styles.page}>
            <div style={styles.questionPanel}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Before we start...</h2>
                    <p style={styles.subtitle}>
                        Please fill in all but one button to confirm your participation.
                    </p>
                </div>
    
                <div style={styles.buttonGridWrapper}>
                    <Container style={styles.buttonGrid}>
                        {buttonStates == null ? <></> : buttonStates.map((ar, index1) => {
                            return <Row key={"Row " + index1} xs={5} style={styles.gridRow}>
                                {ar.map((state, index2) => {
                                    return <Col key={"Col " + index2} style={styles.gridCol}>
                                        <Button
                                            variant={buttonStates[index1][index2] ? "primary" : "danger"}
                                            style={buttonStates[index1][index2] ? styles.onButton : styles.offButton}
                                            onClick={() => {
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
    
                    {
                        pressQuant > 30
                        ?
                        <Button
                            variant="primary"
                            style={styles.skipButton}
                            onClick={() => {
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
        </div>
    )
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
        padding: "1rem",
        paddingTop: "1rem",
        boxSizing: "border-box"
    },

    questionPanel: {
        width: "100%",
        maxWidth: "760px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
        border: "1px solid #e5e7eb",
        overflow: "hidden"
    },

    header: {
        background: "#111827",
        padding: "1.5rem 2rem",
        textAlign: "left"
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

    buttonGridWrapper: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem"
    },

    buttonGrid: {
        width: "100%",
        maxWidth: "430px",
        padding: 0
    },

    gridRow: {
        marginBottom: "0.25rem"
    },

    gridCol: {
        display: "flex",
        justifyContent: "center",
        padding: "0.25rem"
    },

    onButton: {
        width: "72px",
        height: "44px",
        borderRadius: "10px",
        fontWeight: "600",
        boxShadow: "0 6px 14px rgba(37, 99, 235, 0.18)"
    },

    offButton: {
        width: "72px",
        height: "44px",
        borderRadius: "10px",
        fontWeight: "600",
        boxShadow: "0 6px 14px rgba(220, 38, 38, 0.16)"
    },

    skipButton: {
        backgroundColor: "#111827",
        borderColor: "#111827",
        padding: "0.65rem 1.5rem",
        borderRadius: "10px",
        fontWeight: "600",
        boxShadow: "0 10px 20px rgba(15, 23, 42, 0.15)"
    }
};

export default QuestionOne;