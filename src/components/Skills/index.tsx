import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { SectionTitle } from 'helpers/definitions';
import React from 'react';

import * as Styled from './styles';

const Skills: React.FC = () => {
  const { markdownRemark, placeholderImage } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "techstack" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      placeholderImage: file(relativePath: { eq: "tech_stack.png" }) {
        childImageSharp {
          fluid(maxWidth: 780) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Image>
        <Img fluid={placeholderImage.childImageSharp.fluid} alt={sectionTitle.title} />
        {/* {skills.map((item) => {
          const {
            id,
            frontmatter: { title, percentage }
          } = item.node;

          return (
            <Styled.Skill key={id}>
              <ProgressBar title={title} percentage={percentage} />
            </Styled.Skill>
          );
        })} */}
      </Styled.Image>
    </Container>
  );
};

export default Skills;
