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
  ${tw`mb-2 text-indigo-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Title = styled.h3`
  ${tw`flex flex-col mb-4 font-semibold sm:items-center sm:justify-between sm:flex-row sm:text-xl`};
`;

export const Description = styled.p``;

export const Date = styled.h3`
  ${tw`text-xs`};
`;

export const Tags = styled.div`
  ${tw`flex flex-row items-center justify-between`}
`;

export const Tag = styled.span`
  ${tw`px-2 py-1 mr-2 text-xs text-indigo-900 bg-indigo-100 border border-indigo-300 rounded-md`}
`;
