import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`py-4 bg-gray-100`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`mx-2 text-indigo-900 hover:text-indigo-600`};
  }
`;

export const Link = styled.a`
  ${tw`mx-2 text-indigo-900 hover:text-indigo-600`};
`;

export const Copyright = styled.div`
  ${tw`flex justify-center w-full py-4`}
`;
