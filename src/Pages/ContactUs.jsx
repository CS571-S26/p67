
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';

function Contact(props) {

    const contactData = localStorage.getItem("contactData") == null ? null : JSON.parse(localStorage.getItem("contactData"));
    const transitions = contactData == null ? null : contactData.transitions;
    const [givenNum, setGivenNum] = useState(0);
    const [answerNum, setAnswerNum] = useState(-1);

    const handleSubmit = () => {
        if (contactData == null) {
            setAnswerNum(Math.floor(Math.random() * 10000000000));
            return;
        }

        const transTo = transitions.filter(e => e.from == givenNum);

        if (transTo.length > 0) {
            setAnswerNum(transTo[0].to);
            return;
        }

        setAnswerNum(Math.floor(Math.random() * 10000000000));
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.cardHeader}>
                    <h2 style={styles.title}>Contacting Us</h2>
                </div>

                <div style={styles.cardBody}>
                    <p style={styles.description}>
                        We do not have a phone number or email. Instead, you can send us a number
                        and we will respond with another number.
                    </p>

                    <p style={styles.question}>
                        You may be wondering... what is the relation between the numbers?
                    </p>

                    <p style={styles.smallText}>
                        ¯\_(ツ)_/¯
                    </p>

                    <Form style={styles.form}>
                        <Form.Group style={styles.formGroup}>
                            <Form.Label style={styles.label}>
                                Give Us a Number
                            </Form.Label>
                            <Form.Control
                                style={styles.input}
                                type="number"
                                value={givenNum}
                                onChange={(e) => setGivenNum(e.target.value)}
                                placeholder="Enter a number"
                            />
                        </Form.Group>

                        <Form.Group style={styles.formGroup}>
                            <Form.Label style={styles.label}>
                                Answer
                            </Form.Label>
                            <Form.Control
                                style={styles.input}
                                value={answerNum}
                                type="number"
                                disabled
                                readOnly
                            />
                        </Form.Group>

                        <Button
                            variant="dark"
                            onClick={handleSubmit}
                            style={styles.button}
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        paddingTop: "3rem",
        boxSizing: "border-box"
    },

    card: {
        width: "1100px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column"
    },

    cardHeader: {
        background: "#111827",
        padding: "1.25rem 1.75rem",
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
        margin: "0.25rem 0 0",
        color: "#d1d5db",
        fontSize: "0.85rem",
        fontWeight: "500",
        letterSpacing: "1.2px",
        textTransform: "uppercase"
    },

    cardBody: {
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "left"
    },

    description: {
        color: "#374151",
        fontSize: "1rem",
        lineHeight: "1.6",
        margin: 0
    },

    question: {
        color: "#111827",
        fontSize: "1.05rem",
        fontWeight: "600",
        margin: 0
    },

    smallText: {
        color: "#6b7280",
        fontSize: "1rem",
        margin: 0
    },

    form: {
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem"
    },

    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem"
    },

    label: {
        color: "#374151",
        fontSize: "0.85rem",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        marginBottom: 0
    },

    input: {
        width: "100%",
        padding: "0.7rem 0.85rem",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
        fontSize: "1rem"
    },

    button: {
        alignSelf: "center",
        padding: "0.6rem 1.5rem",
        borderRadius: "10px",
        fontWeight: "600"
    }
};

export default Contact;