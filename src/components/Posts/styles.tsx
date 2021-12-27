import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Posts = styled.div`
  ${tw`flex flex-wrap w-full mt-8`};
`;

export const Post = styled.div`
  ${tw`w-full`};
`;

export const Card = styled.div`
  ${tw`flex flex-col w-full h-full mb-10 overflow-hidden`};
`;

export const Content = styled.div`
  ${tw`text-indigo-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Title = styled.div`
  ${tw`flex flex-col font-semibold sm:items-center sm:justify-between sm:flex-row sm:text-xl`};
`;

export const Description = styled.div``;

export const DateAndReadingTime = styled.div`
  ${tw`flex flex-row items-center text-xs`};
`;

export const Tags = styled.div`
  ${tw`flex flex-row items-center justify-between`}
`;

export const Tag = styled.span`
  ${tw`mr-2 text-xs text-indigo-900`}
  width: max-content;
  background: linear-gradient(120deg, #edf2b9 0%, #edf2b9 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 80%;
`;
