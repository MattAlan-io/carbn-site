import React, { PropsWithChildren } from 'react';

import Section from '../../../components/section/section';
import Typography from '../../../components/typography/typography';

import tw from 'tailwind.macro';
import Logo from '../../../components/logo';
import Layout from '../../../components/layout';
import { scrollToSection } from '../../../util/util';
import BackgroundLines from '../../../components/background-lines/background-lines';
import { Parallax } from 'react-scroll-parallax';
import { DeviceWidth, useDeviceSize } from '../../../hooks/useDeviceSize';
import { css } from '@emotion/core';

type ContinueButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

const ContinueButton = ({ children, ...rest }: ContinueButtonProps) => {
  const Base = tw.button`
  bg-carbn-luna-green
  hover:bg-gray-100
  text-white
  font-semibold
  py-2
  px-8
  border
  h-10
  w-32
  rounded
  shadow
`;

  return (
    <Base
      {...rest}
      css={css`
        background-color: #31bea9;
        border: 0;
        width: 8rem;
        height: 2.8rem;
        font-weight: 600;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border-width: 1px;
        border-radius: 0.5rem;
      `}
    >
      {children}
    </Base>
  );
};

const LogoSection = () => {
  const goToAppPreviews = () => {
    scrollToSection('app');
  };

  const [deviceWidth] = useDeviceSize();

  // Offset down 50px to center in page
  const scrollOffset = -0;
  const scrollRate = 40;
  const scrollProps = deviceWidth === DeviceWidth.Mobile ? [0, 0] : [scrollRate + scrollOffset, scrollOffset - scrollRate];

  return (
    <Section id="logo" className="bg-carbn-blue text-carbn-white min-h-screen">
      <BackgroundLines>
        <Layout className="flex min-h-screen px-10">
          <Parallax
            className="px-2 mt-2 md:mt-0 bg-black flex-1 min-h-screen"
            styleInner={{ display: 'flex', minHeight: '100vh' }}
            y={scrollProps}
          >
            <div className="grid grid-cols-1 self-center justify-center w-full">
              <Logo />
              <h3
                css={css`
                  text-align: center;
                  text-transform: uppercase;
                  letter-spacing: 0.15rem;
                  font-weight: 300;
                  line-height: 1.8rem;
                `}
                className="mt-10"
              >
                Enabling individuals to take personal responsibility for their impact on the planet.
              </h3>
              <div className="flex justify-center mt-5">
                <ContinueButton onClick={goToAppPreviews}>Enter</ContinueButton>
              </div>
            </div>
          </Parallax>
        </Layout>
      </BackgroundLines>
    </Section>
  );
};

export default LogoSection;
