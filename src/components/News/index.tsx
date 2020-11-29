import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface News {
  node: {
    id: string;
    frontmatter: {
      content: string;
      newsDate: string;
    };
  };
}

const News: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "news section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "news" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              content
              newsDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const newsList: News[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      <Styled.News>
        {newsList.map((item) => {
          const {
            id,
            frontmatter: { content, newsDate }
          } = item.node;

          return (
            <Styled.NewsItem key={id}>
              <Styled.Date>{newsDate}</Styled.Date>
              <Styled.Title>{content}</Styled.Title>
            </Styled.NewsItem>
          );
        })}
      </Styled.News>
    </Container>
  );
};

export default News;
