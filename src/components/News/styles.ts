import styled from 'styled-components';
import tw from 'tailwind.macro';

export const News = styled.div`
  ${tw`max-w-screen-md mx-auto w-full px-0 mb-4`};
`;

export const NewsItem = styled.div`
  ${tw`flex flex-col`};
`;

export const Date = styled.div`
  ${tw`text-indigo-900 font-bold text-xl`}
`;

export const Title = styled.h3`
  ${tw`my-4 text-indigo-900`};
`;
