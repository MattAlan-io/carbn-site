import React from 'react';
import tw from 'tailwind.macro';

const StyledDiv = tw.div`
  bg-white
  rounded-lg
  overflow-hidden
  border
`;

const IntroSection = () => {
  return <StyledDiv>Intro section</StyledDiv>;
};

export default IntroSection;
