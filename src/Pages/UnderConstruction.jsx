import '../App.css'
import constr from '../assets/UnderConstruction.gif'
import { Container, Image } from 'react-bootstrap'

function UnderConstruction() {
  return (
    <div>
      <Container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1>This page is Under Construction!</h1>
      </Container>
      <Image src={constr} alt='Construction Worker'/>
      <p>Thank you for taking the survey.</p>
      <p>Please wait for more content to be added.</p>
    </div>
  )
}

export default UnderConstruction;