import React from 'react';
import { getFormatedProfile } from './helpers/getFormatedProfile';
import ProfileItem from './profile-iItem';

type PropTypes = {
  data: any;
};

const ProfileData: React.FC<PropTypes> = (props) => {
  const { data } = props;
  return (
    <div className="md:w-[65%] sm:w-[100%] bg-primary-200 rounded-[15px] p-7 sm:mt-10 mb-5">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg text-primary-900 font-semibold pt-2">PROFILE</h1>
        <button className="px-8 bg-primary-900 text-white rounded-[15px]">Edit</button>
      </div>
      <div className="mt-7">
        {getFormatedProfile(data).map((item, index) => {
          return <ProfileItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProfileData;
