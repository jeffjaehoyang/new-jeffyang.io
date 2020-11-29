import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import RecentPosts from 'components/RecentPosts';
// import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import News from 'components/News';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
      <RecentPosts />
      <hr />
      <News />
    </Layout>
  );
};

export default IndexPage;
