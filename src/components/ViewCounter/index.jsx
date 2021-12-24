import firebase from 'gatsby-plugin-firebase';
// ViewCounter.js
import React, { useEffect, useState } from 'react';
import { BsSunglasses, BsEyeglasses, BsLightningChargeFill } from 'react-icons/bs';
import { BiGlasses } from 'react-icons/bi';
import { FaGlassCheers } from 'react-icons/fa';
import { FcBarChart } from 'react-icons/fc';
import { MdBolt } from 'react-icons/md';
import { MdOutlineWhatshot } from 'react-icons/md';

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
    <div className="flex flex-row items-center text-sm font-normal text-gray-700">
      <MdOutlineWhatshot className="mr-1 text-black" />
      {viewCount ? Number(viewCount).toLocaleString('en-US') : `---`} views
    </div>
  );
};

export default ViewCounter;
