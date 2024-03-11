import React, { useState } from 'react';
import './App.css'; // Import your CSS file here
import { Button, Modal, Container, Row, Col, Card } from 'react-bootstrap'; // Import React Bootstrap components

function App() {
  const [showWhyHireModal, setShowWhyHireModal] = useState(false);
  const [showWhyNotHireModal, setShowWhyNotHireModal] = useState(false);

  const openWhyHireModal = () => {
    setShowWhyHireModal(true);
  };

  const openWhyNotHireModal = () => {
    setShowWhyNotHireModal(true);
  };

  return (
    <div className="App">
      <header className="header-container">
        <div className="left-section">
          <img src="./src/headshotCropped.png" alt="Your Profile" className="profile-picture" />
          <h1>Michael Dinh</h1>
        </div>12
        <div className="right-section">
          <a href="./src/Michael.Dinh.Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <a href="https://www.linkedin.com/in/michael-dinh-8a080a1a7/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <div className="intro-paragraph">
        <p>
          <strong>Dear The Quad Interview Team,</strong>
          <br />
          <br />
          First and foremost, I want to express my heartfelt gratitude to each of you for the time and thoughtful discussions during my interviews. Your insights and questions have left a lasting impression, and I appreciate the opportunity to learn more about Quad's dynamic environment.
          <br />
          <br />
          <strong>To Mario:</strong> Mario, your role overseeing application development and support for multiple teams is fascinating. While I admit I didn't fully grasp all the intricacies during our conversation, I'm genuinely intrigued by the intersection of client feedback, data crunching, and value delivery. I hope to learn more about how your team's efforts contribute to Quad's success in the future.
          <br />
          <br />
          <strong>To Brian and David:</strong> Brian and David, thank you for creating such a welcoming and stress-free environment during the technical assessments. Your easygoing demeanor allowed me to express my thoughts confidently. I also thoroughly enjoyed your goofy dynamic—it's refreshing to see a team that works well together. I look forward to the possibility of collaborating with you both someday.
          <br />
          <br />
          <strong>To Jim:</strong> I appreciate the engaging conversation we had. The prospect of joining Quad excites me, especially considering the fun environment you described. And yes, as a Chicago sports fan, I'm convinced there's still a little "Bears fan" left in you. Perhaps we can discuss sports over a game of pickleball someday!
          <br />
          <br />
          I don't want to take up too much of everyone's time, so I kept this short. Thank you all once again for considering me. I eagerly await the opportunity to contribute to Quad's continued success.
          <br />
          <br />
          <strong>Sincerely,</strong>
          <br />
          Michael Dinh
        </p>
      </div>

      <div className="buttons">
        <Button variant="success" onClick={openWhyHireModal} className="buttonToPress">
          Reminders of Why You Should Consider Me
        </Button>
        <Button variant="danger" onClick={openWhyNotHireModal} className="buttonToPress">
          Reminders of Why You Should Not Consider Me
        </Button>
      </div>

      <Modal show={showWhyHireModal} onHide={() => setShowWhyHireModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Why You Should Consider Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <strong>Programming & Business Emphasis:</strong>
              </Col>
              <Col>
                My passion for both programming and the world of business gives me the drive and passion to be able to make a significant impact through my work at Quad.
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Self-Starter & Experience with REST APIs:</strong>
              </Col>
              <Col>
                Practiced developing multiple apps and websites as side projects.
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Communication:</strong>
              </Col>
              <Col>
                Years of experience teaching about technology to elementary schoolers & UW faculty.
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Adaptability:</strong>
              </Col>
              <Col>
                At DoIT, have to quickly learn about and diagonise customer's issues on the fly.
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Dedication & Patience:</strong>
              </Col>
              <Col>
                Went the extra mile to ensure an interview with Quad (after being initially rejected).
                Also a pottery and weight lifting enthusiast.
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Resilience:</strong>
              </Col>
              <Col>
                Currently work 9 hours a week at UW-DoIT, so working for Quad during next school year is entirely feasible.
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>


      {/* <li>🚀 Experience with Object-Oriented Programming</li>
            <li>🌐 Expertise in REST APIs</li>
            <li>🗣 Great Communication Skills</li> */}

      <Modal show={showWhyNotHireModal} onHide={() => setShowWhyNotHireModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Why You Should Not Consider Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please don't 😄</p>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default App;
