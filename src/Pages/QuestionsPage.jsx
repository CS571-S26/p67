import { useEffect, useState } from 'react';
import { Container, Image, Button } from 'react-bootstrap'
import QuestionOne from './QuestionOne';
import UnderConstruction from './UnderConstruction';
import QuestionAboutYou from './QuestionAboutYou';
import Lucky from './Lucky';
import QuestionContactUs from './QuestionContactUs';

function QuestionsPage() {

    const [currQuestion, setQuestIndex] = useState(parseInt(localStorage.getItem("questionProgress") ?? "0"));
    if (localStorage.getItem("questionProgress") == null) localStorage.setItem("questionProgress", 0);
    const [canContinue, setContinue] = useState(false);
    let questions = [<QuestionOne contFunc={setContinue}/>,<QuestionAboutYou contFunc={setContinue}/>
        ,<Lucky contFunc={setContinue}/>,<QuestionContactUs contFunc={setContinue}/>,
        <UnderConstruction contFunc={setContinue}/>]

    useEffect( () => {

    }, []);
    
  return (
    <div>
        {questions[currQuestion]}
        <Container style={{position:"fixed",bottom:40,left:0,right:0,justifyContent:"center"}}>
            <Button variant="primary" onClick={() => {
                setQuestIndex(currQuestion - 1)
                }} disabled={currQuestion == 0}> 
                Previous
            </Button>
            <Button variant="primary" onClick={() => {
                let curr = parseInt(localStorage.getItem("questionProgress"));
                if (curr <= currQuestion ) localStorage.setItem("questionProgress", canContinue ? currQuestion + 1 : currQuestion)
                setQuestIndex(currQuestion + 1)
                }} disabled={!canContinue && parseInt(localStorage.getItem("questionProgress")) <= currQuestion}> 
                {canContinue || parseInt(localStorage.getItem("questionProgress")) > currQuestion ? "Continue" : "Not Yet"}
            </Button>
        </Container>
    </div>
  )
}

export default QuestionsPage;