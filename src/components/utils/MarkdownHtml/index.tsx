import React, { ReactNode } from 'react';

interface Props {
  content: any;
}

const MarkdownHtml: React.FC<Props> = ({ content }) => (
  <span
    className="prose max-w-full markdown"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default MarkdownHtml;
