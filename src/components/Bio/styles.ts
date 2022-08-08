import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Bio = styled.div`
  ${tw`flex flex-col justify-between items-center mt-10 bg-yellow-100 border-indigo-800 rounded-lg w-full px-2 py-8`};
`;

export const BioHeader = styled.div`
  ${tw`flex w-full items-center justify-center font-bold italic`}
`;

export const BioPic = styled.div`
  ${tw`mt-4 mb-4`}
`;

export const BioInfo = styled.div`
  ${tw`flex flex-col items-center justify-center text-center w-full`}
`;
