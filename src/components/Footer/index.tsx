import Container from 'components/ui/Container';
import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/jeffjaehoyang" rel="noreferrer noopener" target="_blank">
          <VscGithub className="w-6 h-6" />
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/jaeho-yang/" rel="noreferrer noopener" target="_blank">
          <SiLinkedin className="w-6 h-6" />
        </Styled.Link>
      </Styled.Links>
      <Styled.Copyright>© 2022 by Jeff Yang </Styled.Copyright>
    </Container>
  </Styled.Footer>
);

export default Footer;
