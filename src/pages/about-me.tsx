import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import About from 'components/About';

const AboutMePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <About />
    </Layout>
  );
};

export default AboutMePage;
