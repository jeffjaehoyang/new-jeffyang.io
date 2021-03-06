import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import MarkdownHtml from 'components/utils/MarkdownHtml';
import FormatHtml from 'components/utils/FormatHtml';

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
      <FormatHtml content={aboutMe.html} />
    </Container>
  );
};

export default About;
