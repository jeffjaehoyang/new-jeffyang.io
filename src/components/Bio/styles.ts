import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Bio = styled.div`
  ${tw`flex flex-row items-center justify-center mt-10 border-t border-b border-gray-200 w-full py-10`};
`;

export const BioPic = styled.div`
  $ img {
    ${tw`w-24 h-24 border-4 border-white rounded-full`};
  }
`;

export const BioInfo = styled.div`
  ${tw`flex flex-col w-full`}
`;
