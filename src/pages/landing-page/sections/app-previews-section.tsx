import { css } from '@emotion/core';
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../../../components/layout';
// import tw from 'tailwind.macro';
import Section from '../../../components/section/section';
import Typography from '../../../components/typography/typography';
import { DeviceWidth, useDeviceSize } from '../../../hooks/useDeviceSize';

// Mockups
import AdaptSetupImage from '../../../assets/img/adapt-setup.png';
import CarbnIDImage from '../../../assets/img/carbn-id.png';
import LearnSetupImage from '../../../assets/img/learn-setup.png';
import OffsetsSetupImage from '../../../assets/img/offsets-setup.png';
import SetupQuestionsImage from '../../../assets/img/setup-questions.png';

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
        opacity: 0.08;
      }
    `}
    className="min-h-screen bg-cover bg-transparent relative"
  >
    {children}
  </div>
);

const appPreviews: AppPreviewProps[] = [
  {
    title: 'Learn',
    description: 'Calculate your carbon footprint to understand how your activities impact the planet.',
    imageSide: 'left',
    imageSrc: LearnSetupImage,
    alt: 'Learn setup iOS wireframe',
  },
  {
    title: 'Adapt',
    description:
      'Adapt your lifestyle to reduce your footprint with tailored, high-impact behavioural solutions. We’ll help you to sustain green habits and build you up to bigger changes.',
    imageSide: 'right',
    imageSrc: AdaptSetupImage,
    alt: 'Adapt setup iOS wireframe',
  },
  {
    title: 'Invest',
    description:
      'Offset the impact that cannot immediately be reduced by investing in projects that remove equivalent carbon from the atmosphere.',
    imageSide: 'left',
    imageSrc: CarbnIDImage,
    alt: 'Carbn ID iOS wireframe',
  },
  {
    title: 'Offset',
    description: 'Make your impact count by influencing your network to join your pledge to collective climate action.',
    imageSide: 'right',
    imageSrc: OffsetsSetupImage,
    alt: 'Offsets setup iOS wireframe',
  },
];

const AppPreviewsSection = () => {
  return (
    <Section id="app">
      <BackgroundLines>
        <Layout>
          <div className="grid text-center md:text-left text-carbn-blue">
            {appPreviews.map(props => (
              <AppPreview {...props} />
            ))}
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
  imageSrc: string;
  alt: string;
};

const AppPreview: React.FC<AppPreviewProps> = ({ imageSide = 'left', description, title, imageSrc, alt }) => {
  const [deviceWidth] = useDeviceSize();

  const SCROLL_RATE = deviceWidth === DeviceWidth.Mobile ? 0 : 40;

  const InfoText = (
    <div className="px-10 flex flex-col justify-center flex-1">
      <Typography h2>{title}</Typography>
      <Typography p>{description}</Typography>
    </div>
  );
  const Image = (
    <Parallax className="px-0 mt-0 md:px-2 md:mt-2 bg-black flex-1" y={[SCROLL_RATE, -SCROLL_RATE]}>
      <div className="flex items-center justify-center">
      <div className="device device-iphone-x shadow-2xl" style={{ marginLeft: '-2rem', marginTop: '-6rem' }}>
        <div className="device-frame">
          <img className="device-content" src={imageSrc} alt={alt} />
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
      </div>
    </Parallax>
  );

  return (
    <div
      className={`max-w-screen flex content-center md:pd-2 flex-wrap flex-col md:flex-row ${
        imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {Image}
      {InfoText}
    </div>
  );
};

export default AppPreviewsSection;
