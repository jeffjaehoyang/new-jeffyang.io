import styled from 'styled-components';
import tw from 'tailwind.macro';

export const News = styled.div`
  ${tw`max-w-screen-md mx-auto w-full px-0 mb-4`};
`;

export const NewsItem = styled.div`
  ${tw`flex flex-col`};
`;

export const Date = styled.div`
  ${tw`mr-4 text-indigo-400`}
`;

export const Title = styled.div`
  ${tw`flex items-center my-4 text-indigo-900 font-bold`};
`;

export const Explanation = styled.div`
  ${tw`mb-2 ml-6 text-indigo-900`}
`;
