import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { SectionTitle } from 'helpers/definitions';
import React from 'react';

interface About {
  html: React.ReactNode;
  frontmatter: {
    title: string;
    subtitle: string;
  };
}

const About: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "about section" } }) {
        html
        frontmatter {
          title
          subtitle
        }
      }
    }
  `);

  const aboutMe = markdownRemark;
  const sectionTitle: SectionTitle = markdownRemark.frontmatter;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      <FormatHtml content={aboutMe.html} />
    </Container>
  );
};

export default About;
