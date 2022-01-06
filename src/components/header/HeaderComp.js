import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/imgs/logo.png';
import {headerMenu} from "../../configs/headerMenu";
import {SiInstagram, SiTwitter} from "react-icons/all";

import './HeaderComp.scss';

const HeaderComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="header-comp-container">
        <Navbar.Brand href="#home" className="header-comp-logo">
          <img src={Logo} alt="teddy-gang"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-comp-toggle-custom"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="header-comp-social d-flex justify-content-center align-items-center">
            <Nav.Link href="#" className="item"><SiInstagram/></Nav.Link>
            <Nav.Link href="#" className="item"><SiTwitter/></Nav.Link>
          </Nav>
          <Nav className="me-auto header-comp-menu d-flex justify-content-between align-items-center">
            {
              headerMenu.map((val, index) => (
                <Nav.Link key={index} href={val.path} className="item from-left">{val.label}</Nav.Link>
              ))
            }
          </Nav>
          <Nav className="header-comp-btn d-flex justify-content-center align-items-center">
            <button className="button-item">connect</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;