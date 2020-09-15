import React from 'react';

import Section from '../../../components/section/section';
import Typography from '../../../components/typography/typography';

import tw from 'tailwind.macro';

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

const CarbnTitle = tw.h1`
  text-6xl
`;

const LogoSection = () => {
  return (
    <Section id="intro" className="bg-carbn-luna-green text-carbn-white h-64">
      <div className="grid grid-cols-2">
        <CarbnTitle>CARBN</CarbnTitle>
        <div>LOGO</div>
      </div>

      <div className="flex justify-center">
        <ContinueButton>
          Enter
        </ContinueButton>
      </div>
    </Section>
  );
};

export default LogoSection;
