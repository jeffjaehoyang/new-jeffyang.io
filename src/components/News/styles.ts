import styled from 'styled-components';
import tw from 'tailwind.macro';

export const News = styled.div`
  ${tw`w-full max-w-screen-md px-0 mx-auto mb-4`};
`;

export const NewsItem = styled.div`
  ${tw`flex flex-col mb-4`};
`;

export const Date = styled.div`
  ${tw`text-xl font-bold text-blue-900`}
`;

export const Title = styled.h3`
  ${tw`my-4 text-blue-900`};
`;
