import ViewCounter from 'components/ViewCounter';
import React from 'react';
import { MdOutlineFiberNew, MdOutlineFiberPin } from 'react-icons/md';

import * as Styled from './styles';

interface Props {
  title: string;
  description: string;
  tags: Array<string>;
  date: string;
  readingTime: string;
  slug: string;
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

const RecentPostCard: React.FC<Props> = ({ title, description, tags, date, readingTime, slug }) => (
  <Styled.RecentPostCard>
    {getDaysDifference(new Date(date), new Date()) > 30 ? (
      <MdOutlineFiberPin className="absolute text-3xl text-gray-600" style={{ top: -2, left: 5 }} />
    ) : (
      <MdOutlineFiberNew className="absolute text-3xl text-red-600" style={{ top: -2, left: 5 }} />
    )}
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{description}</Styled.Content>
      <Styled.Date>
        {date} • {readingTime}
        <ViewCounter id={slug.split('/')[2]} />
      </Styled.Date>
      <Styled.Tags>
        {tags.map((item) => (
          <Styled.Tag key={item}>{item}</Styled.Tag>
        ))}
      </Styled.Tags>
    </Styled.Wrapper>
  </Styled.RecentPostCard>
);

export default RecentPostCard;
