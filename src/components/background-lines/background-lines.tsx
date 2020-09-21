import { css } from '@emotion/core';
import React from 'react';
import DarkLines from '../../assets/svg/Dark.svg';

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
      }
    `}
    className="min-h-screen  bg-transparent relative flex"
  >
    {children}
  </div>
);

export default BackgroundLines;
