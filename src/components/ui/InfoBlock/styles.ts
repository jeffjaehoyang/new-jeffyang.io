import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const InfoBlock = styled.div<StyledProps>`
  ${tw`relative flex flex-col p-4 text-indigo-900 bg-white border-2 border-gray-300 rounded-lg`};
  ${({ center }) => center && tw`items-center`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 mb-2 text-indigo-500 border border-teal-400 rounded-full`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`mt-1 font-semibold text-md`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Content = styled.p`
  ${tw`mt-1`};
`;

export const Tags = styled.div`
  ${tw`pt-4 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`px-2 py-1 mr-2 text-xs text-indigo-900 bg-indigo-100 border border-indigo-300 rounded-md`}
`;

export const Date = styled.h3`
  ${tw`pt-4 text-xs text-indigo-900`};
`;
