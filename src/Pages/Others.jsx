
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
            sortingRate: 10
        }
    ]);

    return (
        <div>
            <Row xs={3}>
                {
                knownUsers.map((user, index) =>{
                    <Col key={index}>
                        <Card>
                            <Card.Header>
                                {user.name}
                            </Card.Header>
                            <Card.Img variant='top' src={you} alt={"An image of " + user.name}/>
                            <Accordion>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>More info</Accordion.Header>
                                    <Accordion.Body style={{whiteSpace:"pre"}}>
                                        Clicks for first puzzle: {user.firstPuzzleClicks}
                                        Dice rolls to win: {user.rollsForLuck}
                                        T h e i r   n u m b e r: {user.givenNumber}
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
        width: "720px",
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
        gap: "2rem",
        alignItems: "center"
    },

    imageContainer: {
        width: "250px",
        height: "250px",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #d1d5db",
        backgroundColor: "#f9fafb",
        flexShrink: 0
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },

    infoSection: {
        flex: 1
    },

    infoRow: {
        marginBottom: "1rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid #e5e7eb"
    },

    label: {
        display: "block",
        color: "#6b7280",
        fontSize: "0.72rem",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.9px",
        marginBottom: "0.2rem"
    },

    value: {
        display: "block",
        color: "#111827",
        fontSize: "1.2rem",
        fontWeight: "600"
    },

    footer: {
        color: "#6b7280",
        fontSize: "0.9rem",
        fontStyle: "italic",
        textAlign: "right",
        padding: "0 2rem 1.25rem"
    }
};

export default OtherParticipants;