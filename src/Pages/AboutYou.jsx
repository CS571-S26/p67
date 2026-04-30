
import { Image } from 'react-bootstrap'
import you from '../assets/DefaultPortrait.jpg'

function AboutYou(props) {

    let localKnowledge = localStorage.getItem("userData");

    if (localKnowledge != null) localKnowledge = JSON.parse(localKnowledge);

    const sampleNames = ["Avery", "Belle", "Cameron", "Daniel", "Emily", "Felicia", "Gary", "Hanson", "Ima", "Jane", "Karson", "Larry", "Maria", "Natalie", "Ojama", "Perry", "Queen", "Rae", "Samuel", "Tom", "Umi", "Veronica", "Will", "Xander", "Yorick", "Zoe"];

    const chosenName = localKnowledge === null ? sampleNames[Math.floor(Math.random() * sampleNames.length)] : localKnowledge.name;
    const chosenAge = localKnowledge === null ? Math.floor(Math.random() * 95) + 5 : localKnowledge.age;
    const chosenCheese = localKnowledge === null ? Math.floor(Math.random() * 200) : localKnowledge.cheese;
    
    if (localKnowledge == null) localStorage.setItem("userData", JSON.stringify({
        name:chosenName,
        age:chosenAge,
        cheese:chosenCheese
    }));

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.cardHeader}>
                    <h2 style={styles.title}>About You</h2>
                </div>

                <div style={styles.cardBody}>
                    <div style={styles.imageContainer}>
                        <Image
                            src={you}
                            alt="It's a default portrait that's actually you"
                            style={styles.image}
                        />
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoRow}>
                            <span style={styles.label}>Name</span>
                            <span style={styles.value}>{chosenName}</span>
                        </div>

                        <div style={styles.infoRow}>
                            <span style={styles.label}>Age</span>
                            <span style={styles.value}>{chosenAge}</span>
                        </div>

                        <div style={styles.infoRow}>
                            <span style={styles.label}>Cheese Eaten</span>
                            <span style={styles.value}>{chosenCheese} lbs</span>
                        </div>
                    </div>
                </div>

                <div style={styles.footer}>
                    Sorry, I don't make the rules.
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        paddingTop: "3rem",
        boxSizing: "border-box"
    },

    card: {
        width: "100%",
        maxWidth: "720px",
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

export default AboutYou;