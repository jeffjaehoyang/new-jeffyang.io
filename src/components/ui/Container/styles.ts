import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  section?: boolean;
}

export const Container = styled.div<StyledProps>`
  ${tw`flex flex-wrap w-full max-w-screen-md p-5 mx-auto`};
  ${({ section }) => section && tw`py-8 sm:py-12`};
`;
