import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-blue-900`};
  }

  a {
    ${tw`text-blue-600 hover:text-blue-700`};
  }

  p + p {
    ${tw`mt-3`};
  }
`;
