import { useEffect, useState } from 'react';
import { Container, Image, Button } from 'react-bootstrap'
import QuestionOne from './QuestionOne';
import UnderConstruction from './UnderConstruction';

function QuestionsPage() {

    const [currQuestion, setQuestIndex] = useState(0);
    const [canContinue, setContinue] = useState(false);
    let questions = [<QuestionOne contFunc={setContinue}/>, <UnderConstruction contFunc={setContinue}/>]

  return (
    <div>
        {questions[currQuestion]}
        <Container style={{position:"fixed",bottom:40,left:0,right:0,justifyContent:"center"}}>
            <Button variant="primary" onClick={() => canContinue ? setQuestIndex(currQuestion + 1) : setQuestIndex(currQuestion)}>
                {canContinue ? "Continue" : "Not Yet"}
            </Button>
        </Container>
    </div>
  )
}

export default QuestionsPage;