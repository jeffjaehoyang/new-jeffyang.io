import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const InfoBlock = styled.div<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300 text-indigo-900`};
  ${({ center }) => center && tw`items-center`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 border border-teal-400 rounded-full mb-2`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 font-semibold`};
`;

export const Content = styled.p`
  ${tw`mt-1`};
`;

export const Tags = styled.div`
  ${tw`pt-4 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-indigo-900 border border-teal-400 rounded-full px-2 py-1 mr-2`}
`;

export const Date = styled.h3`
  ${tw`pt-4 text-xs text-indigo-900`};
`;
