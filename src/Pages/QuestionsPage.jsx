import { useEffect, useState } from 'react';
import { Container, Image, Button } from 'react-bootstrap'
import QuestionOne from './QuestionOne';
import UnderConstruction from './UnderConstruction';
import QuestionAboutYou from './QuestionAboutYou';
import Lucky from './Lucky';
import QuestionContactUs from './QuestionContactUs';
import Sorting from './SortItOut';
import Completion from './Complete';
import TermsAndConditions from './TermsAndConditions';

function QuestionsPage() {

    const [currQuestion, setQuestIndex] = useState(parseInt(localStorage.getItem("questionProgress") ?? "0"));
    if (localStorage.getItem("questionProgress") == null) localStorage.setItem("questionProgress", 0);
    const [canContinue, setContinue] = useState(false);
    let questions = [<QuestionOne contFunc={setContinue}/>,<TermsAndConditions contFunc={setContinue}/>,<QuestionAboutYou contFunc={setContinue}/>
        ,<Lucky contFunc={setContinue}/>,<QuestionContactUs contFunc={setContinue}/>,
        <Sorting contFunc={setContinue}/>,<Completion contFunc={setContinue}/>]

    useEffect( () => {

    }, []);
    
  return (
    <div>
        {questions[currQuestion]}
        <Container style={styles.navContainer}>
    <Button
        style={styles.previousButton}
        variant="outline-dark"
        onClick={() => {
            setQuestIndex(currQuestion - 1)
        }}
        disabled={currQuestion == 0}
    > 
        Previous
    </Button>

    <Button
        style={
            currQuestion >= questions.length - 1 || (!canContinue && parseInt(localStorage.getItem("questionProgress")) <= currQuestion)
            ? styles.disabledContinueButton
            : styles.continueButton
        }
        variant="dark"
        onClick={() => {
            let curr = parseInt(localStorage.getItem("questionProgress"));
            if (curr <= currQuestion ) localStorage.setItem("questionProgress", canContinue ? currQuestion + 1 : currQuestion)
            setQuestIndex(currQuestion + 1)
        }}
        disabled={currQuestion >= questions.length - 1 || (!canContinue && parseInt(localStorage.getItem("questionProgress")) <= currQuestion)}
    > 
        {currQuestion >= questions.length - 1 ? "This is the end!" : canContinue || parseInt(localStorage.getItem("questionProgress")) > currQuestion ? "Continue" : "Not Yet"}
    </Button>
</Container>
    </div>
  )
}

const styles = {
    navContainer: {
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.75rem",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.16)",
        padding: "0.75rem",
        borderRadius: "14px",
        zIndex: 1000
    },

    previousButton: {
        minWidth: "110px",
        padding: "0.65rem 1.25rem",
        borderRadius: "10px",
        fontWeight: "600",
        borderColor: "#d1d5db",
        color: "#374151",
        backgroundColor: "#ffffff"
    },

    continueButton: {
        minWidth: "130px",
        padding: "0.65rem 1.25rem",
        borderRadius: "10px",
        fontWeight: "600",
        backgroundColor: "#111827",
        borderColor: "#111827",
        color: "#ffffff",
        boxShadow: "0 8px 18px rgba(15, 23, 42, 0.18)"
    },

    disabledContinueButton: {
        minWidth: "130px",
        padding: "0.65rem 1.25rem",
        borderRadius: "10px",
        fontWeight: "600",
        backgroundColor: "#9ca3af",
        borderColor: "#9ca3af",
        color: "#ffffff",
        cursor: "not-allowed"
    }
};

export default QuestionsPage;