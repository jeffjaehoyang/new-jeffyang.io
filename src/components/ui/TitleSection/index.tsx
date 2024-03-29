import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  subtitle?: string;
  readingTime?: string;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle, readingTime }) => (
  <Styled.TitleSection>
    {subtitle && (
      <Styled.SubTitle center={center}>
        {title} {readingTime && ' • ' + readingTime}
      </Styled.SubTitle>
    )}
    <Styled.Title center={center}>{subtitle}</Styled.Title>
    {/* <Styled.Separator center={center} /> */}
  </Styled.TitleSection>
);

export default TitleSection;
