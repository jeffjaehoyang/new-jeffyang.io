import styled from 'styled-components';
import tw from 'tailwind.macro';

export const RecentPosts = styled.div`
  ${tw`flex flex-col items-center justify-center w-full mt-2 mb-8 sm:flex-row sm:flex-wrap sm:justify-between sm:items-stretch`};
  gap: 10px;
`;

export const PostItem = styled.div`
  ${tw`w-full`};
  @media (min-width: 640px) {
    width: 49%;
  }
`;
