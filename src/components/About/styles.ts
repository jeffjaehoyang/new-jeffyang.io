import styled from 'styled-components';
import tw from 'tailwind.macro';

export const News = styled.div`
  ${tw`max-w-screen-md mx-auto w-full px-0 mb-4`};
`;

export const NewsItem = styled.div`
  ${tw`flex flex-row items-center text-center`};
`;

export const Date = styled.div`
  ${tw`mr-4 text-blue-400`}
`;

export const Title = styled.h3`
  ${tw`my-4 text-blue-900`};
`;
