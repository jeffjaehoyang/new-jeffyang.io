import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Button from 'components/ui/Button';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import { SectionTitle } from 'helpers/definitions';

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
      markdownRemark(frontmatter: { category: { eq: "recent posts section" } }) {
        frontmatter {
          title
          subtitle
          linkTo
          linkText
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" } } }
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
