import React from 'react';
import SEO from '../components/seo';
import LandingPage from './landing-page/landing-page';
import Footer from '../components/footer';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <LandingPage />
    <Footer />
  </>
);

export default IndexPage;
