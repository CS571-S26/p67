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
        <Container style={{position:"fixed",bottom:20,left:0,right:0,justifyContent:"center",outline:"solid",outlineWidth:"2",outlineColor:"rgb(0, 0, 0)",backgroundColor:"rgb(209, 219, 235)",width:"fit-content",paddingTop:5,paddingBottom:5, borderRadius:5}}>
            <Button style={{marginRight:10}} variant="primary" onClick={() => {
                setQuestIndex(currQuestion - 1)
                }} disabled={currQuestion == 0}> 
                Previous
            </Button>
            <Button variant="primary" onClick={() => {
                let curr = parseInt(localStorage.getItem("questionProgress"));
                if (curr <= currQuestion ) localStorage.setItem("questionProgress", canContinue ? currQuestion + 1 : currQuestion)
                setQuestIndex(currQuestion + 1)
                }} disabled={currQuestion >= questions.length - 1 || (!canContinue && parseInt(localStorage.getItem("questionProgress")) <= currQuestion)}> 
                {currQuestion >= questions.length - 1 ? "This is the end!" : canContinue || parseInt(localStorage.getItem("questionProgress")) > currQuestion ? "Continue" : "Not Yet"}
            </Button>
        </Container>
    </div>
  )
}

export default QuestionsPage;