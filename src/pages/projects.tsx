import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Projects from 'components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Projects />
      <hr />
    </Layout>
  );
};

export default ProjectsPage;
