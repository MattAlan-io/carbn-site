import React from 'react';

import Section from '../../../components/section/section';
import Typography from '../../../components/typography/typography';

import tw from 'tailwind.macro';
import Logo from '../../../components/logo';
import Layout from '../../../components/layout';
import { scrollToSection } from '../../../util/util';
import BackgroundLines from '../../../components/background-lines/background-lines';

const ContinueButton = tw.button`
  bg-white
  hover:bg-gray-100
  text-gray-800
  font-semibold
  py-2
  px-4
  border
  border-gray-400
  rounded
  shadow
`;

const LogoSection = () => {
  const goToAppPreviews = () => {
    scrollToSection('app');
  }
  
  return (
    <Section id="logo" className="bg-carbn-blue text-carbn-white h-screen">
      <BackgroundLines>

      <Layout className="flex min-h-screen ">
        <div className="grid grid-cols-1 self-center justify-center w-full">
          <Logo />
          <Typography h2 className="mt-10 text-center">Enabling individuals to take personal responsibility for their impact on the planet.</Typography>
          <div className="flex justify-center mt-5">
            <ContinueButton onClick={goToAppPreviews}>Enter</ContinueButton>
          </div>
        </div>
      </Layout>
      </BackgroundLines>
    </Section>
  );
};

export default LogoSection;
