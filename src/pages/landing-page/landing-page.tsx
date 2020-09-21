import React, { useState } from 'react';
import LogoSection from './sections/logo-section';
import EmailSection from './sections/email-section';
import IntroSection from './sections/intro-section';
import Footer from '../../components/footer';
import AppPreviewsSection from './sections/app-previews-section';

const LandingPage = () => {
  const [showFullSite, setShowFullSite] = useState(false);

  const handleIntroAnimationCompleting = () => {
    setShowFullSite(true);
  };

  return (
    <>
      <IntroSection onAnimationCompleting={handleIntroAnimationCompleting} />

        <div style={{ display: showFullSite ? 'initial' : 'none'}}>
          <LogoSection />
          <AppPreviewsSection />
          {/* <EmailSection /> */}
          <Footer />
        </div>
    </>
  );
};

export default LandingPage;
