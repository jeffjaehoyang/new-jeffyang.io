import firebase from 'gatsby-plugin-firebase';
// ViewCounter.js
import React, { useEffect, useState } from 'react';
import { BsSunglasses } from 'react-icons/bs';

const ViewCounter = ({ id }) => {
  const [viewCount, setViewCount] = useState('');

  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };

    firebase.database().ref(`/views`).child(id).on(`value`, onViews);

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id]);

  return (
    <div className="flex flex-row items-center justify-between text-sm font-bold text-gray-600">
      <BsSunglasses className="mr-2 text-xl text-black" />
      {viewCount ? Number(viewCount).toLocaleString('en-US') : `---`} views
    </div>
  );
};

export default ViewCounter;
