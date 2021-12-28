import { GuestbookPost, User } from 'components/Guestbook';
import React, { Dispatch, SetStateAction } from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import { deletePost } from '../../lib/guestbook';
import * as Styled from './styles';

interface Props {
  user: User;
  post: GuestbookPost;
  posts: GuestbookPost[];
  setPosts: Dispatch<SetStateAction<void | GuestbookPost[]>>;
}

const GuestbookPostCard: React.FC<Props> = ({ user, post, posts, setPosts }) => {
  const date = post.createdAt.toDate().toLocaleString('en-US');
  const handleDelete = () => {
    deletePost(post);
    const newPostList = posts.filter((item) => item.docId !== post.docId);
    setPosts(newPostList);
  };
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <RiDoubleQuotesL className="mr-2" />
        <span>{post.content}</span>
        <RiDoubleQuotesR className="ml-2" />
      </Styled.Content>
      <Styled.MetaData>
        <span className="font-bold">{post.displayName}</span>
        <span>, {date}</span>
        {user?.uid === post.uid && (
          <span className="ml-1 text-red-700 cursor-pointer" onClick={handleDelete}>
            / Delete
          </span>
        )}
      </Styled.MetaData>
    </Styled.Wrapper>
  );
};

export default GuestbookPostCard;
