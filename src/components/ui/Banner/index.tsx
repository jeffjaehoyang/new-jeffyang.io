import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>
    </Container>
  </Styled.Banner>
);

export default Banner;
