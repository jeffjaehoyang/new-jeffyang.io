import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from 'helpers/definitions';
import React from 'react';
import { DiEmber } from 'react-icons/di';
import {
    SiAmazonaws, SiAngular, SiDjango, SiExpress, SiFirebase, SiFlask, SiGit, SiGithub, SiGraphql,
    SiHeroku, SiJavascript, SiJenkins, SiMercurial, SiMysql, SiNetlify, SiNodedotjs, SiPhp,
    SiPostgresql, SiPython, SiReact, SiRedux, SiTypescript
} from 'react-icons/si';

import * as Styled from './styles';

const Skills: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "techstack" } }) {
        frontmatter {
          title
          subtitle
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
      {/* version control software */}
      <div className="flex flex-col justify-center w-full mt-2 sm:flex-row sm:flex-wrap sm:justify-between sm:items-stretch">
        <Styled.Stack>
          <Styled.StackTitle>Version Control</Styled.StackTitle>
          <Styled.SkillWrapper>
            <SiGit className="mr-2 text-2xl" />
            <Styled.SkillContent>Git</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiMercurial className="mr-2 text-2xl" />
            <Styled.SkillContent>Mercurial</Styled.SkillContent>
          </Styled.SkillWrapper>
        </Styled.Stack>
        {/* frontend */}
        <Styled.Stack>
          <Styled.StackTitle>Frontend</Styled.StackTitle>
          <Styled.SkillWrapper>
            <SiJavascript className="mr-2 text-2xl" />
            <Styled.SkillContent>Javascript</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiTypescript className="mr-2 text-2xl" />
            <Styled.SkillContent>Typescript</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiReact className="mr-2 text-2xl" />
            <Styled.SkillContent>React.js</Styled.SkillContent>
          </Styled.SkillWrapper>

          <Styled.SkillWrapper>
            <DiEmber className="mr-2 text-2xl" />
            <Styled.SkillContent>Ember.js</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiAngular className="mr-2 text-2xl" />
            <Styled.SkillContent>Angular.js</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiRedux className="mr-2 text-2xl" />
            <Styled.SkillContent>Redux</Styled.SkillContent>
          </Styled.SkillWrapper>
        </Styled.Stack>
        {/* backend */}
        <Styled.Stack>
          <Styled.StackTitle>Backend</Styled.StackTitle>
          <Styled.SkillWrapper>
            <SiPython className="mr-2 text-2xl" />
            <Styled.SkillContent>Python</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiNodedotjs className="mr-2 text-2xl" />
            <Styled.SkillContent>Node.js</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiPhp className="mr-2 text-2xl" />
            <Styled.SkillContent>PHP/Hacklang</Styled.SkillContent>
          </Styled.SkillWrapper>

          <Styled.SkillWrapper>
            <SiDjango className="mr-2 text-2xl" />
            <Styled.SkillContent>Django</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiFlask className="mr-2 text-2xl" />
            <Styled.SkillContent>Flask</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiExpress className="mr-2 text-2xl" />
            <Styled.SkillContent>Express.js</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiGraphql className="mr-2 text-2xl" />
            <Styled.SkillContent>GraphQL</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiFirebase className="mr-2 text-2xl" />
            <Styled.SkillContent>Firebase</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiPostgresql className="mr-2 text-2xl" />
            <Styled.SkillContent>PostgreSQL</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiMysql className="mr-2 text-2xl" />
            <Styled.SkillContent>MySQL</Styled.SkillContent>
          </Styled.SkillWrapper>
        </Styled.Stack>
        {/* infra */}
        <Styled.Stack>
          <Styled.StackTitle>Infrastructure</Styled.StackTitle>
          <Styled.SkillWrapper>
            <SiAmazonaws className="mr-2 text-2xl" />
            <Styled.SkillContent>AWS</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiHeroku className="mr-2 text-2xl" />
            <Styled.SkillContent>Heroku</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiJenkins className="mr-2 text-2xl" />
            <Styled.SkillContent>Jenkins</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiNetlify className="mr-2 text-2xl" />
            <Styled.SkillContent>Netlify</Styled.SkillContent>
          </Styled.SkillWrapper>
          <Styled.SkillWrapper>
            <SiGithub className="mr-2 text-2xl" />
            <Styled.SkillContent>Github</Styled.SkillContent>
          </Styled.SkillWrapper>
        </Styled.Stack>
      </div>
    </Container>
  );
};

export default Skills;
