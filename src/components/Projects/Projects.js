import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shop from "../../Assets/Projects/shop_website.png";
import emotion from "../../Assets/Projects/emotion.png";
import payment from "../../Assets/Projects/payment_portal.png";
import disease from "../../Assets/Projects/disease_detection.jpg";
import design from "../../Assets/Projects/figma_design.jpg";
import cyber from "../../Assets/Projects/cyberhawk.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyber}
              isBlog={false}
              title="CyberHawk"
              description="The Knowledge-based Question Platform is an innovative project aimed at revolutionizing coding education. It primarily relies on JavaScript, the cornerstone of web development, to provide users with a dynamic and interactive interface. A standout feature is the inventive time tracking system, enabling users to methodically manage their problem-solving process"
              ghLink="https://github.com/stanvi123/CyberHawk"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payment}
              isBlog={false}
              title="Payment-Portal"
              description="Payment transaction platform, a powerful and secure website built with React and powered by Stripe to provide a frictionless payment experience. Our website offers a seamless way for businesses and individuals to handle online payments, ensuring the utmost convenience and security."
              ghLink="https://github.com/stanvi123/Payment-Portal.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disease}
              isBlog={false}
              title="Disease detection using Machine Learning"
              description="This innovative project dedicated to the early and accurate detection of Emphysema, a chronic lung disease, using state-of-the-art machine learning models. Emphysema can have a significant impact on an individual's quality of life, and early detection is key to providing timely medical intervention and improving patient outcomes."
              ghLink="https://github.com/stanvi123/python_ml_emphysema"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Eshop"
              description="This e-commerce platform is a dynamic and user-centric website built with React that caters to the latest requirements and trends in the world of online shopping. Our website offers an immersive and feature-rich shopping experience, meeting the needs of today's savvy consumers."
              ghLink="https://github.com/stanvi123/python_ml_emphysema"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={design}
              isBlog={false}
              title="Figma Design for latest Mobile Application"
              description="Designing a mobile application using Figma while adhering to the latest application design standards involves several key principles few of them are 'User-Centered Design', 'Minimalist UI', ' Consistency', 'Accessibility', 'Visual Hierarchy' etc."
              ghLink="https://www.figma.com/file/DwNLSyaU5HgibDUwg5tp3D/Design_MobileApp?type=design&node-id=0%3A1&mode=design&t=bb6jvwARMJAHnTGd-1"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/stanvi123/emotion_recog"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
