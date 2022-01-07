import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import WelcomeComp from "../welcome/WelcomeComp";
import AboutComp from "../about/AboutComp";
import TeamComp from "../team/TeamComp";
import RoadmapComp from "../roadmap/RoadmapComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row>
        <WelcomeComp/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;