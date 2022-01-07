import React from 'react';
import {Container, Row} from "react-bootstrap";
import {roadmapData} from "../../configs/roadmapData";

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height">
      <Container className="roadmap-comp-container d-flex flex-column justify-content-center align-items-center">
        {
          roadmapData.map((main, index) => (
            <Row data-aos="fade-up" key={index} className="item-container">
              {
                main.title && (<h6 className="item-title">{main.title}</h6>)
              }
              {
                main.content.map((val, key) => (
                  <div key={key} className="roadmap-detail">
                    <p className="roadmap-percent">{val.percent}</p>
                    {
                      val.detail.map((detail, detailKey) => (
                        <p key={detailKey} className="desc">{detail}</p>
                      ))
                    }
                  </div>
                ))
              }
            </Row>
          ))
        }
      </Container>
    </Container>
  );
};

export default RoadmapComp;