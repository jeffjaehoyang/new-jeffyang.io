import React from 'react';
import Icon, { IconProps } from 'components/ui/Icon';
import * as Styled from './styles';
import Link from 'gatsby-link';

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
              <Icon icon={['fas', 'link']} style={{ height: '20', width: '20' }} />
            </a>
          )}
          {githubRepo && (
            <a href={githubRepo} className={'text-indigo-900'}>
              <Icon icon={['fab', 'github']} style={{ marginLeft: 10, height: '20', width: '20' }} />
            </a>
          )}
        </Styled.Icons>
      </Styled.TagsAndIcons>
    </Styled.Wrapper>
  </Styled.ProjectCard>
);

export default ProjectsCard;
