import React from 'react';
import {Accordion, Container} from "react-bootstrap";

import './FAQComp.scss';
import {faqData} from "../../configs/faqData";

const FaqComp = () => {
  return (
    <Container fluid className="faq-comp comp-height">
      <Container className="faq-comp-container d-flex flex-column justify-content-center align-items-center">
        <h6 data-aos="fade-up" className="title">F.A.Q</h6>
        <Accordion className="accordion-custom">
          {
            faqData.map((main, index) => (
              <Accordion.Item data-aos="fade-up" key={index} eventKey={index.toString()}>
                <Accordion.Header>{main.question}</Accordion.Header>
                <Accordion.Body>
                  {
                    main.answer.map((item, key) => (
                      <p key={key} className="answer-content">{item}</p>
                    ))
                  }
                </Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </Container>
    </Container>
  );
};

export default FaqComp;