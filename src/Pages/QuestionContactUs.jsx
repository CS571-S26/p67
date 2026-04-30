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
        <div style={styles.page}>
            <div style={styles.panel}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Our Information</h2>
                    <p style={styles.subtitle}>Please fill in with some of our information.</p>
                    <p style={styles.subtitle}>If you have trouble finding our infomation, just contact us!</p>
                </div>
    
                <div style={styles.body}>
                    <div style={styles.infoBox}>
                        <p style={styles.paragraph}>Send us the number {contactData.initial}, and we'll tell you</p>
                        <h4 style={styles.redSpacedText}>t h e   n u m b e r .</h4>
                    </div>
    
                    <Form style={styles.form}>
                        <Form.Group style={styles.formGroup}>
                            <Form.Label style={styles.redLabel}>T h e   n u m b e r :</Form.Label>
                            <Form.Control
                                style={styles.input}
                                type='number'
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
    
                    {
                        showWarning && !showSuccess
                        ?
                        <p style={styles.warningText}>{warningMessage}</p>
                        :
                        <></>
                    }
    
                    {
                        showSuccess
                        ?
                        <p style={styles.successText}>Thank you for the information!</p>
                        :
                        <></>
                    }
    
                    <Button
                        variant="dark"
                        style={styles.submitButton}
                        onClick={() => {
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
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

const styles = {
    page: {
        minHeight: "100vh",
        width: "100vw",
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
        maxWidth: "720px",
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
        gap: "1.25rem"
    },

    infoBox: {
        backgroundColor: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        padding: "1.25rem"
    },

    paragraph: {
        color: "#374151",
        fontSize: "1rem",
        lineHeight: "1.6",
        margin: 0
    },

    redSpacedText: {
        color: "crimson",
        whiteSpace: "pre",
        fontSize: "1rem",
        fontWeight: "700",
        letterSpacing: "0.5px",
        margin: "0.75rem 0 0"
    },

    form: {
        width: "100%"
    },

    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.45rem"
    },

    redLabel: {
        color: "crimson",
        whiteSpace: "pre",
        fontSize: "0.85rem",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        marginBottom: "0.1rem"
    },

    input: {
        width: "100%",
        padding: "0.7rem 0.85rem",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
        fontSize: "1rem"
    },

    warningText: {
        color: "crimson",
        whiteSpace: "pre",
        backgroundColor: "#fef2f2",
        border: "1px solid crimson",
        borderRadius: "10px",
        padding: "0.75rem 1rem",
        fontWeight: "600",
        margin: 0
    },

    successText: {
        color: "green",
        backgroundColor: "#ecfdf5",
        border: "1px solid green",
        borderRadius: "10px",
        padding: "0.75rem 1rem",
        fontWeight: "600",
        margin: 0
    },

    submitButton: {
        alignSelf: "flex-start",
        backgroundColor: "#111827",
        borderColor: "#111827",
        padding: "0.65rem 1.5rem",
        borderRadius: "10px",
        fontWeight: "600",
        boxShadow: "0 10px 20px rgba(15, 23, 42, 0.15)"
    }
};

export default QuestionContactUs;