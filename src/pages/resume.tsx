import Education from 'components/Education';
import Experience from 'components/Experience';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Skills from 'components/Skills';
import React from 'react';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    {/* <Education />
    <hr /> */}
    <Skills />
  </Layout>
);

export default ResumePage;
