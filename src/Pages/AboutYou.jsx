
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
        <div>
            <h2 style={{color:"white"}}>About You</h2>
            <Image src={you} alt="It's a default portrait that's actually you"/>
            <p style={{color:"white"}}>Your name is {chosenName}.</p>
            <p style={{color:"white"}}>You are {chosenAge} years old.</p>
            <p style={{color:"white"}}>You have eaten {chosenCheese} pounds of cheese in your life.</p>
            <br/>
            <p style={{color:"white"}}>Sorry, I don't make the rules.</p>
        </div>
    );
}

export default AboutYou;