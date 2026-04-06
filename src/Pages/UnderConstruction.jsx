import '../App.css'
import constr from '../assets/UnderConstruction.gif'
import { Container, Image } from 'react-bootstrap'
import { useEffect, useState } from 'react';

function UnderConstruction(props) {


  useEffect(() => {
    if (props.contFunc != null) props.contFunc(false);
  }, [])

  return (
    <div>
      <Container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{color:"white"}}>This page is Under Construction!</h1>
      </Container>
      <Image src={constr} alt='Construction Worker'/>
      <p style={{color:"white"}}>Thank you for taking the survey.</p>
      <p style={{color:"white"}}>Please wait for more content to be added.</p>
    </div>
  )
}

export default UnderConstruction;