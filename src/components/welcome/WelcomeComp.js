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
            <h1 className="content-title">Welcome<br/><h1 className="content-title" style={{marginTop: "12px"}}>The
              Teddy Gang Club</h1></h1>
            <h2 className="content"><span style={{color: "#e63059"}}>The Teddy Gang Club</span> is an outlaw
              group of teddy bears living in the Etheruem network. Although they are known for their lawless behaviors,
              they look after their own and often do good deeds.</h2>
          </Col>
          <Col lg={6} sm={12} className="right-side-content d-flex justify-content-center align-items-center">
            <img src={WelcomeImg} alt="teddy-gang-logo"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeComp;