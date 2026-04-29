import { useState } from 'react'
import './App.css'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

function App(props) {

  const [pressed, changePress] = useState(false);

  return (
    <div>
      <Container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1 className="disguise">Welcome </h1>
        <h1 className="disguise">to </h1> 
        <h1 className="disguise">the </h1>
        <Link className="disguise" style={{ textDecoration: 'none' }} to={props.qPath} onClick={() => {if (localStorage.getItem("questionProgress") == null) localStorage.setItem("questionProgress", 0); props.refreshFunc(e => !e); }}>Survey!</Link>
      </Container>
      <p>In this survey, you will answer a few questions that will help us quantify the quality</p>
      <p>of our very real prediction model. Thank you for your participation.</p>
      <br/>
      <Button className="goButton" onClick={() => {changePress(false); changePress(true)}}>Go to Survey!</Button>
      {
        pressed
        ?
        <p style={{color:"red"}}>To Survey! Not to the button!</p>
        :
        <></>
      }
    </div>
  )
}

export default App
