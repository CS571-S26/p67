import { Button } from "react-bootstrap";
import { Link } from "react-router";

function ForgetEverything(props){
    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.cardHeader}>
                    <h2 style={styles.title}>Reset Your Data</h2>
                    <p style={styles.subtitle}>Confirmation</p>
                </div>

                <div style={styles.cardBody}>
                    <div style={styles.warningBox}>
                        <h3 style={styles.warningTitle}>Forget Everything?</h3>

                        <p style={styles.description}>
                            This will erase all saved data from this browser and restart the experience
                            as if you just began the survey.
                        </p>

                        <p style={styles.note}>
                            This action cannot be undone.
                        </p>
                    </div>

                    <Button
                        variant="danger"
                        as={Link}
                        to="/"
                        onClick={() => {
                            localStorage.clear();
                        }}
                        style={styles.button}
                    >
                        Forget Everything
                    </Button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        justifySelf: "center",
        alignItems: "center",
        background: "#f3f4f6",
        padding: "2rem",
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
        flexDirection: "column",
        gap: "1.5rem",
        textAlign: "left"
    },

    warningBox: {
        backgroundColor: "#fef2f2",
        border: "1px solid #fecaca",
        borderRadius: "14px",
        padding: "1.5rem"
    },

    warningTitle: {
        margin: "0 0 0.75rem",
        color: "#991b1b",
        fontSize: "1.35rem",
        fontWeight: "700"
    },

    description: {
        color: "#374151",
        fontSize: "1rem",
        lineHeight: "1.6",
        margin: 0
    },

    note: {
        color: "#991b1b",
        fontSize: "0.95rem",
        fontWeight: "600",
        margin: "1rem 0 0"
    },

    button: {
        alignSelf: "center",
        padding: "0.65rem 1.5rem",
        borderRadius: "10px",
        fontWeight: "600"
    }
};

export default ForgetEverything;