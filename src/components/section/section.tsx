import React from 'react';
import tw from 'tailwind.macro';

import Layout from '../layout';



 
const Section = ({ children, className = '', id }) => (
  <section
    id={id}
    className={`${className} p-10`}
  >
    <Layout>{children}</Layout>
  </section>
);

export default Section;
