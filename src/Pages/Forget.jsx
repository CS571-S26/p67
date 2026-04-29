import { Button, Container } from "react-bootstrap";
import { Link } from "react-router";

function ForgetEverything(props){
    return(
        <Container style={{justifyItems:"center"}}>
            <h1 style={{color:"#f11", marginTop:"20vh",fontSize:96}}>PRESS AND FORGET EVERYTHING*</h1>
            <p style={{color:"#fff"}}>*this means you will erase all data, effectively restarting as if you just started the survey.</p>
            <br/>
            <Button style={{width:"10vw", height:"5vh",textAlign:"center"}} as={Link} to="/" onClick={() => {
                localStorage.clear();
            }}>
                Forget.
            </Button>
        </Container>
    )
}

export default ForgetEverything;