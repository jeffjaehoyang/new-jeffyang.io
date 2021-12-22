import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from 'helpers/definitions';
import React from 'react';
import { ImFilePdf } from 'react-icons/im';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';

import Resume from './resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
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
        <span className="flex flex-row items-center justify-center">
          Download PDF
          <ImFilePdf className="ml-1" />
        </span>
      </a>
      <Document file={Resume} onLoadError={console.error} renderMode="svg">
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
