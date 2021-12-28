import { GuestbookPost, User } from 'components/Guestbook';
import React, { Dispatch, SetStateAction } from 'react';
import { BsChatDots } from 'react-icons/bs';

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
        <BsChatDots className="hidden mr-2 sm:flex" />
        <span>{post.content}</span>
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
