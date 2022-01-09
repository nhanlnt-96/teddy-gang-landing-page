import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import WelcomeImg from '../../assets/imgs/logo.png';

import './WelcomeComp.scss';

const WelcomeComp = () => {
  return (
    <Container fluid className="welcome-comp comp-height">
      <Container className="welcome-comp-container d-flex justify-content-center align-items-center">
        <Row className="welcome-comp-content">
          <Col lg={6} sm={12} className="left-side-content d-flex flex-column justify-content-center">
            <h1 data-aos="fade-right" className="content-title">Welcome<br/><h1 className="content-title"
                                                                                style={{marginTop: "12px"}}>The
              Teddy Gang Club</h1></h1>
            <h2 data-aos="fade-left" className="content"><span style={{color: "#e63059"}}>The Teddy Gang Club</span> is an outlaw group of outlaw teddy bears living in the Etheruem network. They are known for their lawless tendencies and not so fond with the outer world. However, they share a common goal with each other in their closed community and it is to handle their gang's business and share their bounties.</h2>
          </Col>
          <Col data-aos="zoom-out" lg={6} sm={12}
               className="right-side-content d-flex justify-content-center align-items-center">
            <img src={WelcomeImg} alt="teddy-gang-logo"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeComp;