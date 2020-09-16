/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import './layout.css';

const Layout = ({ children, className=''}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <div
      className={`p-10 h-full ${className}`}
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
