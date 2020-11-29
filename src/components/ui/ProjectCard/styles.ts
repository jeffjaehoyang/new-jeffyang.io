import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const ProjectCard = styled.div<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300 text-indigo-900`};
  ${({ center }) => center && tw`items-center`};
`;

export const TagsAndIcons = styled.div`
  ${tw`flex flex-row justify-between content-center`}
`;

export const Icon = styled.span`
  ${tw`flex items-center w-8 h-8 pt-4 mt-auto justify-center text-indigo-500 border border-purple-400 rounded-full`};
`;

export const Icons = styled.span`
  ${tw`pt-4 mt-auto`}
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`text-md mt-1 font-bold`};
`;

export const Content = styled.p`
  ${tw`mt-1 text-sm text-indigo-900`};
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
