import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface StyledProps {
  open: boolean;
}

export const MainNav = styled.nav<StyledProps>`
  ${tw`flex-col order-last hidden w-full my-4 sm:flex sm:flex-row sm:w-auto sm:order-none sm:my-0`};
  ${({ open }) => open && tw`flex`};
`;

export const MainNavItem = motion.custom(styled(Link)`
  ${tw`relative mt-3 ml-0 text-indigo-900 border-b-2 border-transparent hover:text-indigo-900 sm:mr-8 sm:mt-0`};
  width: max-content;

  &.active {
    ${tw`border-teal-600`};
  }
`);

export const ToogleMainNav = styled.button<StyledProps>`
  ${tw`flex flex-col items-end justify-center w-6 h-5 cursor-pointer sm:hidden`};
  outline: none !important;

  span {
    ${tw`inline-block w-6 h-px bg-indigo-500`};
    transition: 0.2s;

    &:first-child {
      ${({ open }) => (open ? tw`-mb-px` : tw`mb-1`)};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    }

    &:last-child {
      ${({ open }) => (open ? tw`-mt-px` : tw`mt-1`)};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    }

    &:nth-child(2) {
      ${tw`inline-block w-8 h-px bg-indigo-400`};

      ${({ open }) => (open ? tw`opacity-0` : tw`opacity-1`)};
      transform: ${({ open }) => (open ? 'translate(20px)' : 'none')};
    }
  }
`;
