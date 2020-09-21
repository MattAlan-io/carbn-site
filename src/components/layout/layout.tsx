import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import './layout.css';

type Props = PropsWithChildren<{ className?: string }>;

const Layout = ({ children, className }: Props) => {

  return (
      <div
      className={`md:p-10 h-full justify-center self-center ${className}`}
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        {children}
      </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
