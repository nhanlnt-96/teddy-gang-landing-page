import React from 'react';
import {Container} from "react-bootstrap";
import BgBanner from '../../assets/imgs/bgBanner.webp';
import {Parallax} from "react-parallax";

import './BannerComp.scss';

const BannerComp = () => {
  return (
    <Parallax bgImage={BgBanner} strength={500} className="banner-comp">
      <Container className="banner-comp-container">
        <h1>this is banner</h1>
      </Container>
    </Parallax>
  );
};

export default BannerComp;