import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Logo = styled(Link)`
  ${tw`flex items-center mr-auto text-blue-900 hover:text-blue-900`};
`;

export const Text = styled.h1`
  ${tw`text-lg font-bold`};
`;

export const Image = styled.figure`
  ${tw`w-8 h-8 mr-3 border border-blue-400 rounded-full`};

  img {
    ${tw`border-white rounded-full`};
  }
`;
