import React from 'react';
import * as Styled from './styles';
import Icon from 'components/ui/Icon';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, RedditShareButton } from 'react-share';

interface Props {
  socialConfig: { twitterHandle: string; config: { url: string; title: string } };
  tags: string[];
}

const Share: React.FC<Props> = ({ socialConfig, tags }) => (
  <Styled.ShareButtonContainer>
    <Styled.FacebookBtn>
      <FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook">
        <Styled.BtnInner>
          <Icon icon={['fab', 'facebook-square']} style={{ width: 15, height: 15, marginRight: 5 }} />
          <span className="text" style={{ fontSize: '0.8em' }}>
            Facebook
          </span>
        </Styled.BtnInner>
      </FacebookShareButton>
    </Styled.FacebookBtn>

    <Styled.TwitterBtn>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded twitter"
        title={socialConfig.config.title}
        via={socialConfig.twitterHandle.split('@').join('')}
        hashtags={tags}
      >
        <Styled.BtnInner>
          <Icon icon={['fab', 'twitter-square']} style={{ width: 15, height: 15, marginRight: 5 }} />
          <span className="text" style={{ fontSize: '0.8em' }}>
            Twitter
          </span>
        </Styled.BtnInner>
      </TwitterShareButton>
    </Styled.TwitterBtn>

    <Styled.LinkedinBtn>
      <LinkedinShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded linkedin"
        title={socialConfig.config.title}
      >
        <Styled.BtnInner>
          <Icon icon={['fab', 'linkedin']} style={{ width: 15, height: 15, marginRight: 5 }} />
          <span className="text" style={{ fontSize: '0.8em' }}>
            LinkedIn
          </span>
        </Styled.BtnInner>
      </LinkedinShareButton>
    </Styled.LinkedinBtn>

    <Styled.RedditBtn>
      <RedditShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded reddit"
        title={socialConfig.config.title}
      >
        <Styled.BtnInner>
          <Icon icon={['fab', 'reddit-square']} style={{ width: 15, height: 15, marginRight: 5 }} />
          <span className="text" style={{ fontSize: '0.8em' }}>
            Reddit
          </span>
        </Styled.BtnInner>
      </RedditShareButton>
    </Styled.RedditBtn>
  </Styled.ShareButtonContainer>
);

Share.defaultProps = {
  tags: []
};

export default Share;
