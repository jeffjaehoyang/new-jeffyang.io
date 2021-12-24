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
      <Styled.Copyright>© 2021 by Jeff Yang </Styled.Copyright>
      <Styled.Copyright>
        <a href="https://www.buymeacoffee.com/jjeffyang" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            style={{ height: 30, width: 100 }}
          />
        </a>
      </Styled.Copyright>
    </Container>
  </Styled.Footer>
);

export default Footer;
