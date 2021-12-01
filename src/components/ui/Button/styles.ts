import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  ${tw`px-8 py-2 text-indigo-900 border border-indigo-900 rounded-full`};

  ${({ primary }) => (primary ? tw`bg-transparent` : tw`text-indigo-600`)};

  ${({ block }) => block && tw`w-full`};
`);
