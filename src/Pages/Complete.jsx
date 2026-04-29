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
        <div style={{marginLeft:"10vw",marginRight:"10vw",marginBottom:"10vh"}}>
            <h1>Congratulations and Thank You!</h1>
            <p>Your contribution to the survey will help with research we conduct on how many people will complete surveys. You can now look at the data we collected from you, as well as the data we collected from a few other users through the "Others" tab above. Here is everything we got:</p>
            <br/>
            <h2>Your personal information: </h2>
            {
                userInfo == null
                ?
                <p>Seems we have trouble remembering you. Go to the About You page again so we can remember!</p>
                :
                <p>You are {JSON.parse(userInfo).name}. You are {JSON.parse(userInfo).age} years old and you have eaten {JSON.parse(userInfo).cheese} pounds of &#129472; cheese.</p>
            }
            <h2>Your performance on the first puzzle: </h2>
            {
                q1Info == null
                ?
                <p>Seems we don't remember you doing the first question. Try completing it again!</p>
                :
                <p>You took {q1Info} clicks to complete the puzzle.</p>
            }
            <h2>Your performance on the dice question: </h2>
            {
                q1Info == null
                ?
                <p>Seems we don't remember you doing the dice rolls. Go back and gamble!</p>
                :
                <p>You took {diceInfo} rolls to get 6 sixes!.</p>
            }
            <h2>Your performance on contacting us: </h2>
            {
                contactData == null
                ?
                <p style={{color:"#d00", whiteSpace:"pre"}}>N o   n u m b e r.</p>
                :
                <p style={{whiteSpace:"pre"}}>Your   n u m b e r   was {JSON.parse(contactData).answer}, after we got contacted about some number {JSON.parse(contactData).initial}.</p>
            }
            <h2>Your performance on sorting some numbers: </h2>
            {
                sortInfo == null
                ?
                <p>Looks like we have no record of you sorting. You can go back and try sorting again!</p>
                :
                <p>You took {sortInfo} swaps to get sort the array!.</p>
            }
            <h2>And finally, our most important conclusion: </h2>
            <p>You would complete a survey. Yaaaaayyyyy!!!&#127881;&#127881;&#127881;</p>
        </div>
    )
}

export default Completion;
