import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';
import * as Styled from './styles';
import NewsByYear from 'components/NewsByYear';

interface News {
  node: {
    id: string;
    frontmatter: {
      content: string;
      newsDate: string;
    };
  };
}

interface NewsByYear {
  node: {
    id: string;
    frontmatter: {
      year: string;
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
        filter: { frontmatter: { category: { eq: "news by year" } } }
        sort: { order: DESC, fields: [frontmatter___year] }
      ) {
        edges {
          node {
            id
            frontmatter {
              year
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const newsList: NewsByYear[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      <Styled.News>
        {newsList.map((item) => {
          const {
            id,
            frontmatter: { year }
          } = item.node;

          return (
            <Styled.NewsItem key={id}>
              <Styled.Date>{year}</Styled.Date>
              <NewsByYear year={year} />
            </Styled.NewsItem>
          );
        })}
      </Styled.News>
    </Container>
  );
};

export default News;
