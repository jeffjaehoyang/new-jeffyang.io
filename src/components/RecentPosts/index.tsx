import Button from 'components/ui/Button';
import Container from 'components/ui/Container';
import InfoBlock from 'components/ui/InfoBlock';
import TitleSection from 'components/ui/TitleSection';
import { motion } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { SectionTitle } from 'helpers/definitions';
import React from 'react';

import * as Styled from './styles';

interface RecentPosts {
  node: {
    id: string;
    fields: {
      readingTime: any;
      slug: string;
    };
    frontmatter: {
      title: string;
      tags: Array<string>;
      description: string;
      date: string;
    };
  };
}

const RecentPosts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "featured posts" } }) {
        frontmatter {
          title
          subtitle
          linkTo
          linkText
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 4
      ) {
        edges {
          node {
            id
            fields {
              readingTime {
                text
              }
              slug
            }
            frontmatter {
              title
              description
              tags
              date
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const recentPosts: RecentPosts[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      <Styled.RecentPosts>
        {recentPosts.map((item) => {
          const {
            id,
            fields: { slug, readingTime },
            frontmatter: { title, description, tags, date }
          } = item.node;

          return (
            <Styled.PostItem key={id}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
                <Link to={slug}>
                  <InfoBlock
                    title={title}
                    description={description}
                    tags={tags}
                    date={date}
                    readingTime={readingTime.text}
                  />
                </Link>
              </motion.div>
            </Styled.PostItem>
          );
        })}
      </Styled.RecentPosts>
      <Link to={sectionTitle.linkTo} style={{ margin: 'auto' }}>
        <Button primary>{sectionTitle.linkText}</Button>
      </Link>
    </Container>
  );
};

export default RecentPosts;
