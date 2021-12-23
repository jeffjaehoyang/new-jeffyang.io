import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Skills = styled.div`
  ${tw`flex flex-wrap w-full`};
`;

export const Skill = styled.div`
  ${tw`w-full sm:w-1/2`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Stack = styled.div`
  ${tw`flex flex-col mb-6`}
`;

export const SkillWrapper = styled.div`
  ${tw`flex flex-row items-center mb-2`}
`;

export const StackTitle = styled.div`
  ${tw`mb-2 font-bold`}
  width: max-content;
  background: linear-gradient(120deg, #fff59d 0%, #fff59d 100%);
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 80%;
`;

export const SkillContent = styled.div`
  ${tw`flex`}
`;
