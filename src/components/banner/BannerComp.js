import React from 'react';
import {Container} from "react-bootstrap";
import BgBanner from '../../assets/imgs/bgBanner.webp';
import {Parallax} from "react-parallax";
import HeaderComp from "../header/HeaderComp";

import './BannerComp.scss';

const BannerComp = () => {
  return (
    <Parallax bgImage={BgBanner} strength={500} className="banner-comp">
      <HeaderComp/>
      <Container className="banner-comp-container">
      
      </Container>
    </Parallax>
  );
};

export default BannerComp;