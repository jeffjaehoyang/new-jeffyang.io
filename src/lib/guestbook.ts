import { GuestbookPost } from 'components/Guestbook';
import firebase from 'gatsby-plugin-firebase';

export const postGuestbook = async (guestbookPost: GuestbookPost): Promise<GuestbookPost> => {
  try {
    const docRef = await firebase.firestore().collection('guestbook').add({
      displayName: guestbookPost.displayName,
      email: guestbookPost.email,
      uid: guestbookPost.uid,
      content: guestbookPost.content,
      createdAt: guestbookPost.createdAt
    });
    docRef.update({
      docId: docRef.id
    });
    return { docId: docRef.id, ...guestbookPost };
  } catch (error) {
    console.error('Error adding document: ', error);
  }
  return guestbookPost;
};

export const getPosts = (): Promise<void | GuestbookPost[]> => {
  return firebase
    .firestore()
    .collection('guestbook')
    .orderBy('createdAt', 'desc')
    .get()
    .then((querySnapshot) => {
      const posts: GuestbookPost[] = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data() as GuestbookPost);
      });
      return posts;
    })
    .catch((e) => console.log(e));
};

export const deletePost = async (post: GuestbookPost) => {
  firebase
    .firestore()
    .collection('guestbook')
    .doc(post.docId)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
