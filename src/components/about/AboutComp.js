import React from 'react';
import {Container, Row} from "react-bootstrap";
import './AboutComp.scss';

const AboutComp = () => {
  return (
    <Container fluid className="about-comp">
      <Container className="about-comp-container d-flex justify-content-center align-items-center">
        <Row className="about-comp-content">
          <h6 data-aos="fade-up" className="title">About us</h6>
          <p data-aos="fade-up" className="content"><span style={{color: "#e63059"}}>The Teddy Gang Club</span> is an
            outlaw group of teddy
            bears living in the Etheruem network. Although they are known for their lawless behaviors, they look after
            their own and often do good deeds.</p>
          <p data-aos="fade-up" className="content">The club rewards its members with exclusive benefits and
            opportunities while also
            giving back to a part of society in need. All members have instant access to all current and future plans.
            Only holding an NFT from our collection makes you a member and that will be your ticket to all utilities The
            Teddy Gang Club will have during launch and in the near future.</p>
          <p data-aos="fade-up" className="content">Given that the Teddy Gang rewards members who are loyal to the club,
            they also impose a
            10% fee on secondary sales spreading them fully to charity of our club members choice. It will be the tax
            implemented by the gang for the greater good.</p>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutComp;