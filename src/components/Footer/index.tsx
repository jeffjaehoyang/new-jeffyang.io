import Container from 'components/ui/Container';
import Icon, { IconProps } from 'components/ui/Icon';
import React from 'react';

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
