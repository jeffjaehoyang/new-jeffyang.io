import styled from 'styled-components';
import tw from 'tailwind.macro';

export const RecentPostCard = styled.div`
  ${tw`relative flex flex-col p-4 text-blue-900 bg-white border-2 border-gray-200 rounded-lg`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 mb-2 text-blue-500 border border-teal-400 rounded-full`};
`;

export const Wrapper = styled.div`
  ${tw``};
`;

export const Title = styled.h3`
  ${tw`mt-1 font-semibold text-md`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Content = styled.p`
  ${tw`mt-1 text-sm`};
`;

export const Tags = styled.div`
  ${tw`pt-4 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`px-2 py-1 mr-2 text-xs text-blue-900 bg-blue-100 border border-blue-300 rounded-md`}
`;

export const Date = styled.h3`
  ${tw`flex flex-row items-center justify-between pt-4 text-xs text-blue-900`};
`;
