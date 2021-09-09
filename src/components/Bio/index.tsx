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
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
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
      <Styled.BioPic>
        <Img
          fluid={logoImage}
          alt={logoTitle}
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            marginRight: 25,
            border: '1px solid grey'
          }}
        />
      </Styled.BioPic>
      <Styled.BioInfo>
        <p>
          Written by <b>Jeff Yang</b>
        </p>
        <p>I blog about software development, ideas, and my daily journey as an aspiring software engineer.</p>
      </Styled.BioInfo>
    </Styled.Bio>
  );
};

export default Bio;
