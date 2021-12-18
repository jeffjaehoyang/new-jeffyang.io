import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Container from 'components/ui/Container';
import Timeline from 'components/ui/Timeline';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from 'helpers/definitions';
import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import Resume from './resume.pdf';

interface Experience {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Experience: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "experiences section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experiences" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              company
              position
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const experiences: Experience[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      <a
        className="mb-4 text-indigo-700 underline"
        href="https://www.dropbox.com/s/5f0yjzryv795q57/jeff-public-resume.pdf?dl=0"
        target="_blank"
      >
        Link to Resume
      </a>
      <Document file={'https://www.dropbox.com/s/5f0yjzryv795q57/jeff-public-resume.pdf?dl=0'} renderMode="svg">
        <Page pageNumber={1} scale={1.2} />
      </Document>
      {/* {experiences.map((item) => {
        const {
          id,
          html,
          frontmatter: { company, position, startDate, endDate }
        } = item.node;

        return (
          <Timeline
            key={id}
            title={company}
            subtitle={position}
            content={<FormatHtml content={html} />}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })} */}
    </Container>
  );
};

export default Experience;
