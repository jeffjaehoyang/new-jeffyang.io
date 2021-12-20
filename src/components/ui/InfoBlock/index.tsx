import React from 'react';
import { MdOutlineFiberNew, MdOutlineFiberPin } from 'react-icons/md';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  description: string;
  tags: Array<string>;
  date: string;
  readingTime: string;
}

const getDaysDifference = (dt1: Date, dt2: Date) => {
  // Convert both dates to milliseconds
  const date1_ms = dt1.getTime();
  const date2_ms = dt2.getTime();
  // To calculate the no. of days between two dates
  const diff_ms = Math.abs(date1_ms - date2_ms);
  const diffDays = diff_ms / (1000 * 3600 * 24);
  return Math.round(diffDays);
};

const InfoBlock: React.FC<Props> = ({ title, description, tags, date, center, readingTime }) => (
  <Styled.InfoBlock center={center}>
    {getDaysDifference(new Date(date), new Date()) > 30 ? (
      <MdOutlineFiberPin className="absolute text-3xl text-indigo-500" style={{ top: -2, left: 5 }} />
    ) : (
      <MdOutlineFiberNew className="absolute text-3xl text-red-600" style={{ top: -2, left: 5 }} />
    )}
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
