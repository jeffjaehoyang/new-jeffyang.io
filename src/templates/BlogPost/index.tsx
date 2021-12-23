import Bio from 'components/Bio';
import Commento from 'components/Commento';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Share from 'components/Share';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import MarkdownHtml from 'components/utils/MarkdownHtml';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React, { useEffect } from 'react';

import incrementViews from '../../lib/increment-views';
import * as Styled from './styles';

interface Post {
  html: React.ReactNode;
  fields: {
    slug: string;
    readingTime: any;
  };
  frontmatter: {
    title: string;
    date: string;
  };
}

interface Props {
  data: {
    site: any;
    markdownRemark: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    previous: Post;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const site = data.site.siteMetadata;
  const { previous, next } = pageContext;

  useEffect(() => {
    incrementViews(post.fields.slug.split('/')[2]);
  }, []);

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <TitleSection
          title={post.frontmatter.date}
          subtitle={post.frontmatter.title}
          readingTime={post.fields.readingTime.text}
        />
        <MarkdownHtml content={post.html} />
        <Bio />
        <Styled.Links>
          <span>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                ← Previous
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                Next →
              </Link>
            )}
          </span>
        </Styled.Links>
        <Share
          socialConfig={{
            twitterHandle: site.twitterHandle,
            config: {
              url: `${site.siteUrl}${post.fields.slug}`,
              title: post.frontmatter.title
            }
          }}
          tags={[]}
        />
        <Commento id={post.frontmatter.title} />
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
