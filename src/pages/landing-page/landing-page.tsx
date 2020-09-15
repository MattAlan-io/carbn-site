import React from 'react';
import LogoSection from './sections/logo-section';
import EmailSection from './sections/email-section';
import IntroSection from './sections/intro-section';
import AppPreviewsSection from './sections/app-previews-section';

const LandingPage = () => {
  return (
    <>
      <IntroSection />
      <LogoSection />
      <AppPreviewsSection />
      <EmailSection />
    </>
  );
};

export default LandingPage;
