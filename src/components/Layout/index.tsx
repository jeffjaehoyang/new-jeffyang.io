import 'assets/styles/global.css';
import 'assets/styles/prismjs/syntax_theme.css';

import GlobalStyles from 'assets/styles/globalStyles';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Styled.Layout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
          </motion.div>
        </Styled.Layout>
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default Layout;
