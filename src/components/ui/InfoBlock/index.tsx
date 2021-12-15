import React from 'react';
import { RiPushpinFill } from 'react-icons/ri';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  description: string;
  tags: Array<string>;
  date: string;
  readingTime: string;
}

const InfoBlock: React.FC<Props> = ({ title, description, tags, date, center, readingTime }) => (
  <Styled.InfoBlock center={center}>
    <RiPushpinFill className="absolute text-red-600" style={{ top: 5, left: 5 }} />
    <Styled.Wrapper center={center}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{description}</Styled.Content>
      <Styled.Date>
        {date} • {readingTime}
      </Styled.Date>
      <Styled.Tags>
        {tags.map((item) => (
          <Styled.Tag key={item}>{item}</Styled.Tag>
        ))}
      </Styled.Tags>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

export default InfoBlock;
