import NewsByYear from 'components/NewsByYear';
import { Accordion } from 'components/ui/Accordion';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from 'helpers/definitions';
import React from 'react';

import * as Styled from './styles';

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
              {Number(year) >= 2021 ? (
                <>
                  <Styled.Date>{year}</Styled.Date>
                  <NewsByYear year={year} />
                </>
              ) : (
                <Accordion year={year} content={<NewsByYear year={year} />} />
              )}
            </Styled.NewsItem>
          );
        })}
      </Styled.News>
    </Container>
  );
};

export default News;
