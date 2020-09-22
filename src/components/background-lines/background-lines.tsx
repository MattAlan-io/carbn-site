import { css } from '@emotion/core';
import React, { PropsWithChildren } from 'react';
import DarkLines from '../../assets/svg/Dark.svg';

const BackgroundLines = ({ children, flip = false }: PropsWithChildren<{ flip?: boolean }>) => (
  <div
    css={css`
      &:before {
        background-image: url(${DarkLines});
        filter: brightness(1.3);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        transform: scaleY(${flip ? -1 : 1});
      }
    `}
    className="min-h-screen bg-transparent relative flex"
  >
    {children}
  </div>
);

export default BackgroundLines;
