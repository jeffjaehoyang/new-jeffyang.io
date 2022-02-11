import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ProjectsCard from 'components/ui/ProjectCard';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Button from 'components/ui/Button';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Projects {
  node: {
    id: string;
    frontmatter: {
      projectName: string;
      projectTags: Array<string>;
      projectDescription: string;
      projectLink?: string;
      githubRepo?: string;
    };
  };
}

const Projects: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
        sort: { order: ASC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            frontmatter {
              projectName
              projectTags
              projectDescription
              projectLink
              githubRepo
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const recentPosts: Projects[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      <Styled.RecentPosts>
        {recentPosts.map((item) => {
          const {
            id,
            frontmatter: { projectName, projectTags, projectDescription, projectLink, githubRepo }
          } = item.node;

          return (
            <Styled.PostItem key={id}>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}>
                <ProjectsCard
                  projectName={projectName}
                  projectDescription={projectDescription}
                  projectTags={projectTags}
                  projectLink={projectLink}
                  githubRepo={githubRepo}
                />
              </motion.div>
            </Styled.PostItem>
          );
        })}
      </Styled.RecentPosts>
    </Container>
  );
};

export default Projects;
