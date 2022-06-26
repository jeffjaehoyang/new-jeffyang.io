import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  center?: boolean;
}

export const ProjectCard = styled.div<StyledProps>`
  ${tw`flex flex-col p-4 mx-3 my-4 text-blue-900 bg-white border-2 border-gray-300 rounded-lg`};
  ${({ center }) => center && tw`items-center`};
`;

export const TagsAndIcons = styled.div`
  ${tw`flex flex-row content-center justify-between`}
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-8 h-8 pt-4 mt-auto text-blue-500 border border-purple-400 rounded-full`};
`;

export const Icons = styled.div`
  ${tw`flex flex-row items-center pt-4 mt-auto`}
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`mt-1 font-bold text-md`};
`;

export const Content = styled.p`
  ${tw`mt-1 text-sm text-blue-900`};
`;

export const Tags = styled.div`
  ${tw`pt-4 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`px-2 py-1 mr-2 text-xs text-blue-900 bg-blue-100 border border-blue-300 rounded-md`}
`;

export const Date = styled.h3`
  ${tw`pt-4 text-xs text-blue-900`};
`;
