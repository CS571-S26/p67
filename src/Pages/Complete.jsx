import { useState, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

function Completion(props) {

    useEffect(() => {
        props.contFunc(false);
        localStorage.setItem("completed", "true");
    }, [])

    const [pressed, changePress] = useState(false);
    let userInfo = localStorage.getItem("userData");
    let q1Info = localStorage.getItem("q1Presses");
    let diceInfo = localStorage.getItem("diceRollNeeded");
    let contactData = localStorage.getItem("contactData");
    let sortInfo = localStorage.getItem("sortingCount");

    return (
        <div style={styles.page}>
            <div style={styles.panel}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Congratulations and Thank You!</h1>
                    <p style={styles.subtitle}>
                        Your contribution to the survey will help with research we conduct on how many people will complete surveys. You can now look at the data we collected from you, as well as the data we collected from a few other users through the "Others" tab above. Here is everything we got:
                    </p>
                </div>
    
                <div style={styles.body}>
                    <section style={styles.resultSection}>
                        <h2 style={styles.sectionTitle}>Your personal information: </h2>
                        {
                            userInfo == null
                            ?
                            <p style={styles.paragraph}>Seems we have trouble remembering you. Go to the About You page again so we can remember!</p>
                            :
                            <p style={styles.paragraph}>You are {JSON.parse(userInfo).name}. You are {JSON.parse(userInfo).age} years old and you have eaten {JSON.parse(userInfo).cheese} pounds of &#129472; cheese.</p>
                        }
                    </section>
    
                    <section style={styles.resultSection}>
                        <h2 style={styles.sectionTitle}>Your performance on the first puzzle: </h2>
                        {
                            q1Info == null
                            ?
                            <p style={styles.paragraph}>Seems we don't remember you doing the first question. Try completing it again!</p>
                            :
                            <p style={styles.paragraph}>You took {q1Info} clicks to complete the puzzle.</p>
                        }
                    </section>
    
                    <section style={styles.resultSection}>
                        <h2 style={styles.sectionTitle}>Your performance on the dice question: </h2>
                        {
                            q1Info == null
                            ?
                            <p style={styles.paragraph}>Seems we don't remember you doing the dice rolls. Go back and gamble!</p>
                            :
                            <p style={styles.paragraph}>You took {diceInfo} rolls to get 6 sixes!</p>
                        }
                    </section>
    
                    <section style={styles.resultSection}>
                        <h2 style={styles.sectionTitle}>Your performance on contacting us: </h2>
                        {
                            contactData == null
                            ?
                            <p style={styles.warningText}>N o   n u m b e r.</p>
                            :
                            <p style={styles.spacedParagraph}>Your   n u m b e r   was {JSON.parse(contactData).answer}, after we got contacted about some number {JSON.parse(contactData).initial}.</p>
                        }
                    </section>
    
                    <section style={styles.resultSection}>
                        <h2 style={styles.sectionTitle}>Your performance on sorting some numbers: </h2>
                        {
                            sortInfo == null
                            ?
                            <p style={styles.paragraph}>Looks like we have no record of you sorting. You can go back and try sorting again!</p>
                            :
                            <p style={styles.paragraph}>You took {sortInfo} swaps to get sort the array!</p>
                        }
                    </section>
    
                    <section style={styles.finalSection}>
                        <h2 style={styles.finalTitle}>And finally, our most important conclusion: </h2>
                        <p style={styles.finalText}>You would complete a survey. Yaaaaayyyyy!!!&#127881;&#127881;&#127881;</p>
                    </section>
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
        alignItems: "flex-start",
        padding: "5rem 2rem 8rem",
        boxSizing: "border-box"
    },

    panel: {
        width: "100%",
        maxWidth: "900px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        textAlign: "left"
    },

    header: {
        background: "#111827",
        padding: "2rem 2.5rem",
        borderBottom: "1px solid #1f2937"
    },

    title: {
        margin: 0,
        color: "#ffffff",
        fontSize: "2rem",
        fontWeight: "700",
        letterSpacing: "-0.5px",
        lineHeight: "1.15"
    },

    subtitle: {
        margin: "0.75rem 0 0",
        color: "#d1d5db",
        fontSize: "1rem",
        lineHeight: "1.65"
    },

    body: {
        padding: "2rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },

    resultSection: {
        backgroundColor: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        padding: "1.25rem"
    },

    sectionTitle: {
        color: "#111827",
        fontSize: "1.15rem",
        fontWeight: "700",
        margin: "0 0 0.5rem",
        lineHeight: "1.3"
    },

    paragraph: {
        color: "#374151",
        fontSize: "1rem",
        lineHeight: "1.6",
        margin: 0
    },

    spacedParagraph: {
        color: "#374151",
        fontSize: "1rem",
        lineHeight: "1.6",
        margin: 0,
        whiteSpace: "pre"
    },

    warningText: {
        color: "crimson",
        backgroundColor: "#fef2f2",
        border: "1px solid crimson",
        borderRadius: "10px",
        padding: "0.75rem 1rem",
        fontWeight: "600",
        margin: 0,
        whiteSpace: "pre"
    },

    finalSection: {
        backgroundColor: "#ecfdf5",
        border: "1px solid green",
        borderRadius: "14px",
        padding: "1.5rem",
        marginTop: "0.5rem"
    },

    finalTitle: {
        color: "green",
        fontSize: "1.2rem",
        fontWeight: "700",
        margin: "0 0 0.5rem",
        lineHeight: "1.3"
    },

    finalText: {
        color: "green",
        fontSize: "1.05rem",
        fontWeight: "600",
        lineHeight: "1.6",
        margin: 0
    }
};

export default Completion;