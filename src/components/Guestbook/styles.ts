import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Header = styled.div`
  ${tw`w-full mb-2`}
`;

export const GuestbookForm = styled.div`
  ${tw`flex flex-col w-full p-5 mt-2 mb-2 bg-blue-100 border border-blue-200 rounded-lg`}
`;

export const GuestbookPosts = styled.div`
  ${tw`flex flex-col`}
`;
