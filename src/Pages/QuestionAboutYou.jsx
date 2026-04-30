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
        <div style={styles.page}>
            <div style={styles.panel}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Personal Information</h2>
                    <p style={styles.subtitle}>Please fill in your personal data to help our research efforts.</p>
                </div>
    
                <div style={styles.body}>
                    <Form style={styles.form}>
                        <Form.Group style={styles.formGroup}>
                            <Form.Label style={styles.label}>Your Name</Form.Label>
                            <Form.Control
                                style={styles.input}
                                onChange={(e) => setInputName(e.target.value)}
                            />
                            
                            <Form.Label style={styles.label}>Year of Birth</Form.Label>
                            <Form.Control
                                style={styles.input}
                                type='number'
                                onChange={(e) => setAge(e.target.value)}
                            />
                            
                            <Form.Label style={styles.label}>The quantity of cheese you have consumed</Form.Label>
                            <Form.Control
                                style={styles.input}
                                type='number'
                                onChange={(e) => setCheese(e.target.value)}
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
                        <p style={styles.successText}>You have been registered!</p>
                        :
                        <></>
                    }
    
                    <Button
                        variant="dark"
                        style={styles.submitButton}
                        onClick={() => {
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

    form: {
        width: "100%"
    },

    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.45rem"
    },

    label: {
        color: "#374151",
        fontSize: "0.85rem",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        marginTop: "0.75rem",
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

export default QuestionAboutYou;