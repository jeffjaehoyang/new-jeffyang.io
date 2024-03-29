import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ImageSharpFluid } from 'helpers/definitions';
import React from 'react';

import * as Styled from './styles';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "watermelon-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <Img fluid={logoImage} alt={logoTitle} />
      </Styled.Image>
      <Styled.Text>{logoTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
