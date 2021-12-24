import React from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  projectName: string;
  projectTags: Array<string>;
  projectDescription: string;
  projectLink?: string;
  githubRepo?: string;
}

const ProjectsCard: React.FC<Props> = ({
  projectName,
  projectTags,
  projectDescription,
  projectLink,
  githubRepo,
  center
}) => (
  <Styled.ProjectCard center={center}>
    <Styled.Wrapper center={center}>
      <Styled.Title>{projectName}</Styled.Title>
      <Styled.Content>{projectDescription}</Styled.Content>
      <Styled.TagsAndIcons>
        <Styled.Tags>
          {projectTags.map((tag) => (
            <Styled.Tag key={tag}>{tag}</Styled.Tag>
          ))}
        </Styled.Tags>
        <Styled.Icons>
          {projectLink && (
            <a href={projectLink} className={'text-indigo-900'}>
              <RiExternalLinkLine className="w-5 h-5" />
            </a>
          )}
          {githubRepo && (
            <a href={githubRepo} className={'text-indigo-900'}>
              <VscGithub className="w-5 h-5 ml-2" />
            </a>
          )}
        </Styled.Icons>
      </Styled.TagsAndIcons>
    </Styled.Wrapper>
  </Styled.ProjectCard>
);

export default ProjectsCard;
