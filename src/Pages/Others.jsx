
import { Accordion, Card, Col, Image, Row } from 'react-bootstrap'
import you from '../assets/DefaultPortrait.jpg'
import { useState, useEffect } from 'react';

function OtherParticipants(props) {
    
    const [knownUsers, addKnownUsers] = useState([
        {
            name: "Sample User",
            age: 22,
            cheese: 89,
            firstPuzzleClicks: 42,
            rollsForLuck: 16,
            givenNumber: 6028463,
            sortingRate: 13
        },
        {
            name: "Bubble Sort",
            age: 70,
            cheese: 0,
            firstPuzzleClicks: 200,
            rollsForLuck: 24,
            givenNumber: 195637694,
            sortingRate: 66
        },
        {
            name: "The Gambler",
            age: 24,
            cheese: 185,
            firstPuzzleClicks: 18346,
            rollsForLuck: 46656,
            givenNumber: 123456789,
            sortingRate: 93468
        },
        {
            name: "Example Guy",
            age: 59,
            cheese: 132,
            firstPuzzleClicks: 78,
            rollsForLuck: 12,
            givenNumber: 936781232,
            sortingRate: 18
        },
        {
            name: "Rhely Fungi",
            age: 21,
            cheese: 420,
            firstPuzzleClicks: 69,
            rollsForLuck: 67,
            givenNumber: 1337,
            sortingRate: 50
        },
        {
            name: "Leonhard Euler",
            age: 76,
            cheese: 22,
            firstPuzzleClicks: 15,
            rollsForLuck: 9,
            givenNumber: 271828182,
            sortingRate: 11
        }
    ]);

    return (
        <div style={styles.page}>
            <div style={styles.contentWrapper}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Other Participants</h1>
                    <p style={styles.subtitle}>Survey data collected from a few other users.</p>
                </div>
    
                <Row xs={1} md={2} lg={3} style={styles.row}>
                    {
                        knownUsers.map((user, index) =>{
                            return <Col key={index} style={styles.col}>
                                <Card style={styles.participantCard}>
                                    <Card.Header style={styles.participantHeader}>
                                        {user.name}
                                    </Card.Header>
    
                                    <Card.Img
                                        variant='top'
                                        src={you}
                                        alt={"An image of " + user.name}
                                        style={styles.image}
                                    />
    
                                    <Accordion flush>
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header>More info</Accordion.Header>
                                            <Accordion.Body style={styles.accordionBody}>
                                                Clicks for first puzzle: {user.firstPuzzleClicks} <br/>
                                                Dice rolls to win: {user.rollsForLuck} <br/>
                                                T h e i r   n u m b e r: {user.givenNumber} <br/>
                                                Steps to sort list: {user.sortingRate}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        width: "100vw",
        background: "#f3f4f6",
        padding: "5rem 5rem 8rem",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center"
    },

    contentWrapper: {
        width: "100%",
        maxWidth: "1100px"
    },

    header: {
        textAlign: "left",
        marginBottom: "2rem"
    },

    title: {
        margin: 0,
        color: "#111827",
        fontSize: "2.4rem",
        fontWeight: "700",
        letterSpacing: "-0.7px",
        lineHeight: "1.15"
    },

    subtitle: {
        margin: "0.5rem 0 0",
        color: "#6b7280",
        fontSize: "1rem",
        lineHeight: "1.6"
    },

    row: {
        rowGap: "1.5rem"
    },

    col: {
        display: "block"
    },

    participantCard: {
        width: "100%",
        border: "1px solid #e5e7eb",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 16px 35px rgba(15, 23, 42, 0.10)",
        backgroundColor: "#ffffff"
    },

    participantHeader: {
        backgroundColor: "#111827",
        color: "#ffffff",
        fontSize: "1.05rem",
        fontWeight: "700",
        letterSpacing: "0.2px",
        padding: "1rem 1.25rem",
        borderBottom: "1px solid #1f2937"
    },

    image: {
        width: "100%",
        height: "230px",
        objectFit: "cover",
        backgroundColor: "#f9fafb",
        borderBottom: "1px solid #e5e7eb"
    },

    accordionBody: {
        whiteSpace: "pre",
        color: "#374151",
        fontSize: "0.95rem",
        lineHeight: "1.8",
        backgroundColor: "#ffffff"
    }
};

export default OtherParticipants;