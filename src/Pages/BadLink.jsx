import '../App.css'
import { Button, Container, Row, Col } from 'react-bootstrap'

function BadLink() {
  return (
    <div>
      <Container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1 className="disguise">Uh Oh!</h1>
      </Container>
      <h2>The link you put in is invalid!</h2>
    </div>
  )
}

export default BadLink;