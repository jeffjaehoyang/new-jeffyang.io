import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Posts = styled.div`
  ${tw`flex flex-wrap w-full`};
`;

export const Post = styled.div`
  ${tw`w-full p-3 sm:w-1/2`};
`;

export const Card = styled.div`
  ${tw`flex flex-col w-full h-full overflow-hidden border border-gray-300 rounded-lg`};
`;

export const Content = styled.div`
  ${tw`p-4 text-indigo-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Title = styled.h3`
  ${tw`mb-4 font-semibold`};
`;

export const Description = styled.p``;

export const Date = styled.h3`
  ${tw`text-xs text-indigo-500`};
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`px-2 py-1 mr-2 text-xs text-indigo-900 bg-indigo-100 border border-indigo-300 rounded-md`}
`;
