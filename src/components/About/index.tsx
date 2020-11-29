import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import MarkdownHtml from 'components/utils/MarkdownHtml';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

interface About {
  html: React.ReactNode;
  frontmatter: {
    title: string;
  };
}

const About: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "about section" } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `);

  // const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const aboutMe = markdownRemark;

  return (
    <Container section>
      <MarkdownHtml content={aboutMe.html} />
    </Container>
  );
};

export default About;
