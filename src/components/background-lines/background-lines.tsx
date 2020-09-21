import { css } from '@emotion/core';
import React from 'react';
import DarkLines from '../../assets/svg/Dark.svg';

const BackgroundLines = ({ children }) => (
  <div
    css={css`
      background-image: url(${DarkLines});
      filter: brightness(1.6);
    `}
    className="min-h-screen bg-cover bg-transparent"
  >
    {children}
  </div>
);

export default BackgroundLines;
