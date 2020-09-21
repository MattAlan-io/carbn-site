import React from 'react';
import SEO from '../components/seo';
import LandingPage from './landing-page/landing-page';
import { ParallaxProvider } from 'react-scroll-parallax';

const IndexPage = () => (
  <ParallaxProvider>
    <SEO title="Home" />
    <LandingPage />
  </ParallaxProvider>
);

export default IndexPage;
