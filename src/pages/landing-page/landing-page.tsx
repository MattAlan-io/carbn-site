import React from 'react';
import LogoSection from './sections/logo-section';
import EmailSection from './sections/email-section';
import IntroSection from './sections/intro-section';
import Footer from '../../components/footer/footer';
import AppPreviewsSection from './sections/app-previews-section';
import SEO from '../../components/seo/seo';

const LandingPage = () => {
  // const [showFullSite, setShowFullSite] = useState(false);

  // const handleIntroAnimationCompleting = () => {
  //   setShowFullSite(true);
  // };

  return (
    <>
      <SEO title="Carbn" />
      <IntroSection />
      <LogoSection />
      <AppPreviewsSection />
      {/* <EmailSection /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
