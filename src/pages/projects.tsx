import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import RecentPosts from 'components/RecentPosts';

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <RecentPosts />
      <hr />
    </Layout>
  );
};

export default ProjectsPage;
