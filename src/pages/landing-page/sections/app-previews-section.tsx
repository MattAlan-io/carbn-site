import { css } from '@emotion/core';
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../../../components/layout';
// import tw from 'tailwind.macro';
import Section from '../../../components/section/section';
import Typography from '../../../components/typography/typography';
import { DeviceWidth, useDeviceSize } from '../../../hooks/useDeviceSize';
import preview from '../../../images/wireframe.png';

import DarkLines from '../../../assets/svg/Dark.svg';

const BackgroundLines = ({ children }) => (

  <div
    css={css`
    &:before {
      background-image: url(${DarkLines});
      filter: brightness(1.6);
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      opacity: .08;
    }
    `}
    className="min-h-screen bg-cover bg-transparent relative"
  >
    {children}
  </div>
);

const AppPreviewsSection = () => {
  return (
    <Section id="app">
      <BackgroundLines>
        <Layout>
          <div className="grid grid-rows-4 row-gap-24">
            <AppPreview title="LEARN" description="Calculate your carbon footprint to understand how your activities impact the planet." />
            <AppPreview
              title="ADAPT"
              description="Adapt your lifestyle to reduce your footprint with tailored, high-impact behavioural solutions. We’ll help you to sustain green habits and build you up to bigger changes."
              imageSide="right"
            />
            <AppPreview
              title="INVEST"
              description="Offset the impact that cannot immediately be reduced by investing in projects that remove equivalent carbon from the atmosphere."
            />
            <AppPreview
              title="INFLUENCE"
              description="Make your impact count by influencing your network to join your pledge to collective climate action."
              imageSide="right"
            />
          </div>
        </Layout>
      </BackgroundLines>
    </Section>
  );
};

type AppPreviewProps = {
  imageSide?: 'left' | 'right';
  title: string;
  description: string;
};

const AppPreview: React.FC<AppPreviewProps> = ({ imageSide = 'left', description, title }) => {
  const [deviceWidth] = useDeviceSize();

  const SCROLL_RATE = deviceWidth === DeviceWidth.Mobile ? 0 : 40;

  const InfoText = (
    <div className="px-2 flex flex-col justify-center flex-1">
      <Typography h2>{title}</Typography>
      <Typography p>{description}</Typography>
    </div>
  );
  const Image = (
    <Parallax className="px-2 mt-5 md:mt-0 bg-black flex-1" y={[SCROLL_RATE, -SCROLL_RATE]}>
      <div>
        <img style={{ margin: '0 auto', height: 550 }} src={preview} alt="PLACEHOLDER" />
      </div>
    </Parallax>
  );

  return (
    <ParallaxProvider>
      <div className={`flex content-center pd-12 flex-wrap sm:flex-col ${imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {Image}
        {InfoText}
      </div>
    </ParallaxProvider>
  );
};

export default AppPreviewsSection;
