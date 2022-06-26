import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Posts = styled.div`
  ${tw`flex flex-wrap w-full mt-8`};
`;

export const Post = styled.div`
  ${tw`w-full`};
`;

export const Card = styled.div`
  ${tw`flex flex-col w-full mb-10 overflow-hidden`};
`;

export const Content = styled.div`
  ${tw`text-blue-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Title = styled.div`
  ${tw`flex flex-col font-semibold sm:items-center sm:justify-between sm:flex-row text-lg sm:text-xl`};
`;

export const Description = styled.div`
  ${tw`text-sm sm:text-md`};
`;

export const DateAndReadingTime = styled.div`
  ${tw`flex flex-row text-gray-800 items-center text-xs`};
`;

export const Tags = styled.div`
  ${tw`flex flex-row items-center justify-between`}
`;

export const Tag = styled.span`
  ${tw`mr-2 text-sm sm:text-md text-blue-900`}
  width: max-content;
  background: linear-gradient(120deg, #edf2b9 0%, #edf2b9 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 80%;
`;
