import { Container } from 'components/ui/Container/styles';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Header = styled.header`
  ${tw``};
`;

export const Wrapper = styled(Container)`
  ${tw`justify-end sm:justify-start items-center`};
`;
