import { useEffect, useState } from 'react';
import { Container, Image, Button } from 'react-bootstrap'
import QuestionOne from './QuestionOne';
import UnderConstruction from './UnderConstruction';
import QuestionAboutYou from './QuestionAboutYou';

function QuestionsPage() {

    const [currQuestion, setQuestIndex] = useState(parseInt(localStorage.getItem("questionProgress") ?? "0"));
    if (localStorage.getItem("questionProgress") == null) localStorage.setItem("questionProgress", 0);
    const [canContinue, setContinue] = useState(false);
    let questions = [<QuestionOne contFunc={setContinue}/>,<QuestionAboutYou contFunc={setContinue}/> , <UnderConstruction contFunc={setContinue}/>]

    useEffect( () => {

    }, []);
    
  return (
    <div>
        {questions[currQuestion]}
        <Container style={{position:"fixed",bottom:40,left:0,right:0,justifyContent:"center"}}>
            <Button variant="primary" onClick={() => {
                localStorage.setItem("questionProgress", canContinue ? currQuestion + 1 : currQuestion)
                return canContinue ? setQuestIndex(currQuestion + 1) : setQuestIndex(currQuestion)
                }}> 
                {canContinue ? "Continue" : "Not Yet"}
            </Button>
        </Container>
    </div>
  )
}

export default QuestionsPage;