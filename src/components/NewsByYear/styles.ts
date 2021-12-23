import styled from 'styled-components';
import tw from 'tailwind.macro';

export const News = styled.div`
  ${tw`w-full max-w-screen-md px-0 mx-auto mb-4`};
`;

export const NewsItem = styled.div`
  ${tw`flex flex-col`};
`;

export const Date = styled.div`
  ${tw`mr-4 text-indigo-400`}
`;

export const Title = styled.div`
  ${tw`flex items-center my-4 font-bold text-indigo-900`};
`;

export const Explanation = styled.div`
  ${tw`mb-2 ml-6 text-indigo-900`}
`;
