import Guestbook from 'components/Guestbook';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import React from 'react';

const GuestBookPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Guestbook" />
      <Guestbook />
    </Layout>
  );
};

export default GuestBookPage;
