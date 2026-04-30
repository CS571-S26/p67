import '../App.css'
import { Button, Container, Row, Col } from 'react-bootstrap'

function BadLink() {
  return (
    <div>
      <Container style={{paddingTop:'10vh', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{color:"red"}}>The link you put in is invalid!</h1>
        <br/>
        <p>Click on one of the tabs at the top to return to a valid page.</p>
      </Container>
    </div>
  )
}

export default BadLink;