import React, { Ref, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { animated } from 'react-spring';
import { useTrail } from 'react-spring/web';
import Section from '../../../components/section/section';
import Typography from '../../../components/typography/typography';
import Layout from '../../../components/layout';
import { scrollToSection } from '../../../util/util';
import BackgroundLines from '../../../components/background-lines/background-lines';


// const items = [
//   'Our climate is changing at an alarming rate due to human activity.',
//   'All of us are responsible for this.',
//   'All of us will be affected by this.',
//   'However – it is hard to understand your impact and how to take responsibility.',
//   'This has led millions of people, who genuinely care about our planet, to do nothing.',
//   'Until now...'
// ];

const sentences = [
  'Our climate is changing at an alarming rate due to human activity.',
  'All of us are responsible for this.',
  'All of us will be affected by this.',
  'However – it is hard to understand your impact and how to take responsibility.',
  'This has led millions of people, who genuinely care about our planet, to do nothing.',
  'Until now...',
];

const config = {
  tension: 1000,
  friction: 56,
};

const SENTENCE_DELAY = 2000;
const DISABLE_ANIMATION = true;

function SentenceTrail(props: { sentence: string, delay: number }) {
  const [toggle, set] = useState(DISABLE_ANIMATION);
  console.log({ DISABLE_ANIMATION, toggle })
  const items = props.sentence.split(' ');

  const delayIn = props.delay ;
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

    console.log({ delayIn, delayOut });

    const handle = window.setTimeout(() => set(true), delayIn);
    return () => window.clearTimeout(handle);
  }, []);

  // useLayoutEffect(() => {
  //   if (DISABLE_ANIMATION) return;

  //   console.log({ delayIn, delayOut });

  //   const handle = window.setTimeout(() => set(false), delayOut);
  //   return () => window.clearTimeout(handle);
  // }, []);

  return (
    <div className="mb-4">
      {trail.map(({ x, height, ...rest }: any, index) => (
        <animated.span
          key={index}
          className="trails-text"
          style={{
            ...rest,
            display: 'inline-block',
            textTransform: 'uppercase',
            marginRight: '.5rem',
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.span style={{ height }}>
            <Typography h1 inline className="text-lg md:text-2xl">
              {items[index]}
            </Typography>
          </animated.span>
        </animated.span>
      ))}
    </div>
  );
}

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

function IntroSection() {

  const totalTime = (sentences.length * SENTENCE_DELAY) + 500;

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
        <Layout>
          {sentences.map((sentence, index) => (
            <SentenceTrail key={index} sentence={sentence} delay={index * SENTENCE_DELAY}/>
          ))}
        </Layout>
      </BackgroundLines>
    </Section>
  );
}

export default IntroSection;
