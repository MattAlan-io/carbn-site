import React, { Ref, useState } from 'react';

import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import { useTrail } from 'react-spring/web';

import Section from '../../../components/section/section';
import Typography from '../../../components/typography/typography';

const items = [
  'Our climate is changing at an alarming rate due to human activity.',
  'All of us are responsible for this.',
  'All of us will be affected by this.',
  'However – it is hard to understand your impact and how to take responsibility.',
  'This has led millions of people, who genuinely care about our planet, to do nothing.',
  'Until now...',
];

const config = { mass: 5, tension: 2000, friction: 200 };

function IntroSection() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 50, height: 0 },
    delay: 1000,
  });

  return (
    <Section id="intro" className="bg-carbn-blue text-carbn-white h-screen">
      <div className="trails-main" onClick={() => set(state => !state)}>
        <div>
          {trail.map(({ x, height, ...rest }: any, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
            >
              <animated.div style={{ height }}>
                <Typography h1>{items[index]}</Typography>
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default IntroSection;
