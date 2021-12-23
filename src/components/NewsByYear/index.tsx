import Container from 'components/ui/Container';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import * as Styled from './styles';

interface News {
  node: {
    id: string;
    frontmatter: {
      content: string;
      explanation: string;
      year: string;
    };
  };
}

interface Props {
  year: string;
}

const NewsByYear: React.FC<Props> = ({ year }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "news" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              content
              explanation
              year
            }
          }
        }
      }
    }
  `);

  const allNewsList: News[] = allMarkdownRemark.edges;
  const newsList = allNewsList.filter((item) => item.node.frontmatter.year === year);

  return (
    <Container>
      <Styled.News>
        {newsList.map((item) => {
          const {
            id,
            frontmatter: { content, explanation, year }
          } = item.node;

          return (
            <Styled.NewsItem key={id}>
              <Styled.Title>
                <FiCheckCircle className="mr-2 text-green-700" style={{ minHeight: 17, minWidth: 17 }} />
                {content}
              </Styled.Title>
              <Styled.Explanation>{explanation}</Styled.Explanation>
            </Styled.NewsItem>
          );
        })}
      </Styled.News>
    </Container>
  );
};

export default NewsByYear;
