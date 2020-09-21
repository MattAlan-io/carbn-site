import React from 'react';
import LandingPage from './landing-page/landing-page';
import { ParallaxProvider } from 'react-scroll-parallax';

const IndexPage = () => (
  <ParallaxProvider>
    <LandingPage />
  </ParallaxProvider>
);

export default IndexPage;
