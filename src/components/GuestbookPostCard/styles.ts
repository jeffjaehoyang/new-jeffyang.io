import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.div`
  ${tw`flex flex-col my-4 text-indigo-900`};
`;
export const Content = styled.div`
  ${tw`flex flex-row items-center mt-1 mb-1 text-base text-indigo-900`};
`;

export const MetaData = styled.span`
  ${tw`flex flex-row items-center text-xs text-indigo-900`};
`;
