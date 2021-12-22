import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`px-4 py-2 text-indigo-900 border border-indigo-900 rounded-md`};

  ${({ primary }) => (primary ? tw`bg-transparent` : tw`text-indigo-600`)};

  ${({ block }) => block && tw`w-full`};
`);
