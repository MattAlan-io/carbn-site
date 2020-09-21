import React from 'react';
import SEO from '../components/seo';
import LandingPage from './landing-page/landing-page';
import Footer from '../components/footer';
import { ParallaxProvider } from 'react-scroll-parallax';

const IndexPage = () => (
  <ParallaxProvider>
    <SEO title="Home" />
    <LandingPage />
    <Footer />
  </ParallaxProvider>
);

export default IndexPage;
