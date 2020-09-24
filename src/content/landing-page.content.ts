// Mockup Images
import AdaptSetupImage from '../assets/img/adapt-setup.png';
import CarbnIDImage from '../assets/img/carbn-id.png';
import LearnSetupImage from '../assets/img/learn-setup.png';
import OffsetsSetupImage from '../assets/img/offsets-setup.png';

const Content = {
  intro: {
    sentences: [
      `Our climate is changing at an alarming rate due to human activity.`,
      `All of us are responsible for this.`,
      `All of us will be affected by this.`,
      `However, it is hard to understand your impact and how to take responsibility.`,
      `This has led millions of people, who genuinely care about our planet, to do nothing.`,
      `Until now...`,
    ],
  },
  logo: {
    subtitle: `Jacob`,
    buttonText: `Enter`,
  },
  app: {
    sections: [
      {
        title: `Learn`,
        description: `Calculate your carbon footprint to understand how your activities impact the planet.`,
        imageSide: `left`,
        imageSrc: LearnSetupImage,
        alt: `Learn setup iOS wireframe`,
      },
      {
        title: `Adapt`,
        description: `Adapt your lifestyle to reduce your footprint with tailored, high-impact behavioural solutions. We’ll help you to sustain green habits and build you up to bigger changes.`,
        imageSide: `right`,
        imageSrc: AdaptSetupImage,
        alt: `Adapt setup iOS wireframe`,
      },
      {
        title: `Invest`,
        description: `Offset the impact that cannot immediately be reduced by investing in projects that remove equivalent carbon from the atmosphere.`,
        imageSide: `left`,
        imageSrc: OffsetsSetupImage,
        alt: `Carbn ID iOS wireframe`,
      },
      {
        title: `Influence`,
        description: `Make your impact count by influencing your network to join your pledge to collective climate action.`,
        imageSide: `right`,
        imageSrc: CarbnIDImage,
        alt: `Infuence setup iOS wireframe`,
      },
    ],
  },
  email: {
    title: `Pre-register for our launch below:`,
    emailInputPlaceholder: `Email`,
    emailInvalidText: `↑ You forgot some required fields`,
    buttonText: `Get Access`,
    buttonSendingText: `Sending...`,
    buttonConfirmationText: `Thank you!`,
  },
  footer: {
    emailAddress: `info@carbn.com`,
  },
} as const;

export type Content = typeof Content;

export default Content;
