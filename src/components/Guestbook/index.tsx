import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import GuestbookPostCard from 'components/GuestbookPostCard';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { graphql, useStaticQuery } from 'gatsby';
import firebase from 'gatsby-plugin-firebase';
import { SectionTitle } from 'helpers/definitions';
import { useAuthState } from 'lib/auth';
import { getPosts, postGuestbook } from 'lib/guestbook';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaSignature } from 'react-icons/fa';
import Loader from 'react-loader-spinner';

import * as Styled from './styles';

export interface GuestbookPost {
  content: string;
  displayName: string;
  email: string;
  uid: string;
  createdAt: firebase.firestore.Timestamp;
  docId?: string;
}

export type User = firebase.User | null;

const Guestbook: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "guestbook" } }) {
        frontmatter {
          title
          subtitle
        }
      }
    }
  `);
  const sectionTitle: SectionTitle = markdownRemark.frontmatter;

  // const [user, setUser] = useState<User>(null);
  const [user, loading, error, handleLogin] = useAuthState(firebase);
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState<void | GuestbookPost[]>([]);
  const [didUserPost, setDidUserPost] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  const handlePostContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleSubmit = async () => {
    const newGuestbookPost: GuestbookPost = {
      displayName: user?.displayName as string,
      email: user?.email as string,
      uid: user?.uid as string,
      content: postContent,
      createdAt: firebase.firestore.Timestamp.now()
    };
    if (newGuestbookPost.content.length === 0) return;
    try {
      setIsPosting(true);
      const newPost = await postGuestbook(newGuestbookPost);
      setPosts([newPost, ...(posts as GuestbookPost[])]);
      setDidUserPost(true);
      setPostContent('');
      setIsPosting(false);
    } catch (e) {
      setIsPosting(false);
    }
  };

  const formInputStyle =
    'w-full overflow-y-auto mr-2 px-3 py-2 text-gray-700 border rounded focus:outline-none focus:shadow-outline';

  return (
    <Container section>
      <div className="flex flex-col">
        <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
        <Styled.Header>
          Feel free to drop a comment below :) It could really be anything – appreciation, advice, information, or even
          random thoughts. Looking forward to reading them! 👻
        </Styled.Header>
        <Styled.GuestbookForm>
          <div className="text-xl font-bold">Sign the Guestbook</div>
          <div className="mb-2">Share a message for future visitors of my site.</div>
          {user ? (
            <form>
              <div className="flex flex-row items-center justify-between">
                <textarea
                  className={formInputStyle}
                  id="post-content"
                  placeholder="Your message ..."
                  maxLength={100}
                  rows={1}
                  value={postContent}
                  onChange={handlePostContentChange}
                />
                <div
                  className="flex flex-row items-center justify-center px-3 py-2 text-white bg-indigo-900 rounded-md cursor-pointer"
                  style={{ minWidth: '74px' }}
                  onClick={handleSubmit}
                >
                  {!isPosting ? (
                    <>
                      Sign
                      <FaSignature className="ml-2 text-2xl" />
                    </>
                  ) : (
                    <Loader type="TailSpin" color="gray" height={25} width={25} />
                  )}
                </div>
              </div>
            </form>
          ) : (
            <button className="p-2 text-white bg-teal-600 rounded-md focus:outline-none" onClick={handleLogin}>
              Login to Sign 🎉
            </button>
          )}
          <div className="mt-2 text-xs">
            Authentication is handled by Github. Your information is only used to display your name.
          </div>
          {didUserPost && (
            <div className="flex flex-row items-center text-sm text-green-700">
              <BsFillCheckCircleFill className="mr-2" />
              <span>Yay! Thank you for signing my guestbook.</span>
            </div>
          )}
        </Styled.GuestbookForm>
        <div className="text-sm">
          This guestbook was inspired by{' '}
          <a className="cursor-pointer" target="_blank" href="https://leerob.io/guestbook">
            {' '}
            Lee Rob's guestbook.
          </a>
        </div>
        <Styled.GuestbookPosts>
          {posts?.map((post: GuestbookPost, index: number) => (
            <GuestbookPostCard key={index} user={user} post={post} posts={posts} setPosts={setPosts} />
          ))}
        </Styled.GuestbookPosts>
      </div>
    </Container>
  );
};

export default Guestbook;
