import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { ImageSharpFluid } from 'helpers/definitions';
import Img from 'gatsby-image';

import * as Styled from './styles';

const Bio: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "my-profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;

  return (
    <Styled.Bio>
      <Styled.BioHeader>
        <span>Thank you for reading!</span>
      </Styled.BioHeader>
      <Styled.BioPic>
        <Img
          fluid={logoImage}
          alt={logoTitle}
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%'
          }}
        />
      </Styled.BioPic>
      <Styled.BioInfo>
        <span>
          Written by <b>Jeff Yang</b>
        </span>
        <span>I blog about software development, ideas, and my daily journey as a learner & software engineer.</span>
      </Styled.BioInfo>
    </Styled.Bio>
  );
};

export default Bio;
