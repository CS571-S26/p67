import { useState } from 'react'
import './App.css'
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'
import surveyer from './assets/comfortable-survey-taker.jpg'
import survey from './assets/FillingDigitalSurvey.jpg'


function App(props) {

  const [pressed, changePress] = useState(false);

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <Container style={styles.titleContainer}>
          <h1 className="disguise" style={styles.titleWord}>Welcome</h1>
          <h1 className="disguise" style={styles.titleWord}>to</h1>
          <h1 className="disguise" style={styles.titleWord}>the</h1>
          <Link
            className="disguise"
            style={{ ...styles.titleLink, textDecoration: 'none' }}
            to={props.qPath}
            onClick={() => {if (localStorage.getItem("questionProgress") == null) localStorage.setItem("questionProgress", 0); props.refreshFunc(e => !e); }}
          >
            Survey!
          </Link>
        </Container>

        <div style={styles.textSection}>
          <p style={styles.description}>
            In this survey, you will answer a few questions that will help us quantify the quality
          </p>
          <p style={styles.description}>
            of our very real prediction model. Thank you for your participation.
          </p>
          <br />
          <Image
              src={survey}
              alt="filling a survey on a laptop"
              style={styles.image}
          />
          <br />
          <p style={styles.description}>
            This survey is a very useful survey, that will give us survey information about surveying. Without this survey we could not know if you or anyone else was surveyable. And if we didn't know that, how would we survey?
          </p>
          <br />
          <Image
              src={surveyer}
              alt="survey enjoyer"
              style={styles.image}
          />
          <br />
          <p style={styles.description}>
            By taking this survey, you will be surveyed. Using this information we will go to Stanley the surveyor, the master of surveying, to ask for his blessing on this, and all future surveys.
          </p>
        </div>

        <div style={styles.actionSection}>
          <Button
            className="goButton"
            style={styles.button}
            onClick={() => {changePress(false); changePress(true)}}
          >
            Go to Survey!
          </Button>

          {
            pressed
            ?
            <p className="warning" style={styles.warning}>
              To Survey! Not to the button!
            </p>
            :
            <></>
          }
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    maxWidth:"100%",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    marginBottom: "8rem"
  },

  image: {
    marginBottom:20
  },

  hero: {
    width: "100%",
    textAlign: "center"
  },

  titleContainer: {
    backgroundColor:"#111827",
    width:"200%",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    flexWrap: "wrap",
    marginBottom: "1.25rem"
  },

  titleWord: {
    color: "#eeeeff",
    fontSize: "4rem",
    fontWeight: "700",
    letterSpacing: "-1.5px",
    margin: 0,  
    lineHeight: "1.1"
  },

  titleLink: {
    color: "#eeeeff",
    fontSize: "4rem",
    fontWeight: "700",
    letterSpacing: "-1.5px",
    margin: 0,
    lineHeight: "1.1"
  },

  textSection: {
    maxWidth: "720px",
    margin: "0 auto",
    marginBottom: "2rem"
  },

  description: {
    color: "#4b5563",
    fontSize: "1.05rem",
    lineHeight: "1.7",
    margin: 0
  },

  actionSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem"
  },

  button: {
    backgroundColor: "#111827",
    borderColor: "#111827",
    padding: "0.75rem 1.75rem",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "1rem",
    boxShadow: "0 10px 20px rgba(15, 23, 42, 0.15)"
  },

  warning: {
    color: "crimson",
    backgroundColor: "#fef2f2",
    border: "1px solid crimson",
    borderRadius: "10px",
    padding: "0.75rem 1rem",
    fontWeight: "600",
    margin: 0
  }
};

export default App
