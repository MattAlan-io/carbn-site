import React, { useEffect, useLayoutEffect, useState } from 'react';

import { animated } from 'react-spring';
import { useTrail } from 'react-spring/web';
import Section from '../../../components/section/section';
import Layout from '../../../components/layout/layout';
import { scrollToSection } from '../../../util/util';
import BackgroundLines from '../../../components/background-lines/background-lines';
import Content from '../../../content/landing-page.content';

const content = Content.intro;

const config = {
  tension: 1000,
  friction: 56,
};

const SENTENCE_DELAY = 2000;
const DISABLE_ANIMATION = false;

function SentenceTrail(props: { sentence: string; delay: number }) {
  const [toggle, set] = useState(DISABLE_ANIMATION);
  const items = props.sentence.split(' ');

  const delayIn = props.delay;
  const delayOut = props.delay + SENTENCE_DELAY;

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: -50, height: 0 },
  });

  useLayoutEffect(() => {
    if (DISABLE_ANIMATION) return;
    const handle = window.setTimeout(() => set(true), delayIn);
    return () => window.clearTimeout(handle);
  }, []);

  return (
    <div className="mb-4">
      {trail.map(({ x, height, ...rest }: any, index) => (
        <animated.span
          key={index}
          className="trails-text"
          style={{
            ...rest,
            display: 'inline-block',
            marginRight: '.5rem',
            transform: x.interpolate((x: number) => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.span style={{ height }}>
            <h1 className="text-lg md:text-2xl font-normal">{items[index]}</h1>
          </animated.span>
        </animated.span>
      ))}
    </div>
  );
}

type Props = {
  onAnimationCompleting?: () => void;
};

function IntroSection({ onAnimationCompleting }: Props) {
  const { sentences } = content;
  const totalTime = sentences.length * SENTENCE_DELAY + 500;

  useEffect(() => {
    const handle = setTimeout(() => {
      if (DISABLE_ANIMATION) return;
      scrollToSection('logo', 'end');
    }, totalTime);
    return () => clearTimeout(handle);
  });

  return (
    <Section id="intro" className="bg-carbn-blue text-carbn-white h-screen">
      <BackgroundLines>
        <Layout className="px-10">
          {sentences.map((sentence, index) => (
            <SentenceTrail key={index} sentence={sentence} delay={index * SENTENCE_DELAY} />
          ))}
        </Layout>
      </BackgroundLines>
    </Section>
  );
}

export default IntroSection;
