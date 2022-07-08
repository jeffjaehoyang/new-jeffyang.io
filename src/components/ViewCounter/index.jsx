import firebase from 'gatsby-plugin-firebase';
import React, { useEffect, useState } from 'react';
import { BiCoffeeTogo } from 'react-icons/bi';

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
    <div className="flex flex-row justify-center items-center text-xs font-normal text-gray-800">
      <BiCoffeeTogo className="ml-1 mr-1 text-green-600 text-xs" />
      <span>{viewCount ? Number(viewCount).toLocaleString('en-US') : `---`} views</span>
    </div>
  );
};

export default ViewCounter;
