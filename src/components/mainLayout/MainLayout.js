import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import WelcomeComp from "../welcome/WelcomeComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row>
        <WelcomeComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;