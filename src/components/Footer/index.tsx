import React from 'react';

import Container from 'components/ui/Container';
import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/jeffjaehoyang" rel="noreferrer noopener" target="_blank">
          <Icon icon={['fab', 'github']} style={{ height: '25', width: '25' }} />
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/jaeho-yang/" rel="noreferrer noopener" target="_blank">
          <Icon icon={['fab', 'linkedin']} style={{ height: '25', width: '25' }} />
        </Styled.Link>
      </Styled.Links>
      <Styled.Copyright>© 2021 by Jeff Yang </Styled.Copyright>
    </Container>
  </Styled.Footer>
);

export default Footer;
