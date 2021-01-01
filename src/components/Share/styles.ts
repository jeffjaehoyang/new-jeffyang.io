import styled from 'styled-components';
import tw from 'tailwind.macro';

export const ShareButtonContainer = styled.div`
  ${tw`w-full flex flex-wrap mt-10`};
`;

export const BtnInner = styled.div`
  ${tw`flex justify-center items-center`}
`;

export const FacebookBtn = styled.div`
  ${tw`p-4 w-1/4 flex justify-center items-center text-white bg-blue-800`}
`;

export const TwitterBtn = styled.div`
  ${tw`p-4 w-1/4 flex justify-center items-center text-white bg-blue-400`}
`;

export const LinkedinBtn = styled.div`
  ${tw`p-4 w-1/4 flex justify-center items-center text-white bg-blue-600`}
`;
export const RedditBtn = styled.div`
  ${tw`p-4 w-1/4 flex justify-center items-center text-white bg-red-600`}
`;
