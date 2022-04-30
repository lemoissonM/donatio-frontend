import React from 'react';
import { useUserGroup } from './hooks/get-list.hook';
import UserGroupItem from './item';

const UserGroupList: React.FC = () => {
  const { data } = useUserGroup();
  return (
    <div className="w-full mt-10 sm:mt-3 overflow-y-scroll md:grid md:grid-cols-2 md:gap-[30px]">
      {data?.map?.((userGroup) => (
        <UserGroupItem userGroup={userGroup} key={userGroup.id} />
      ))}
    </div>
  );
};

export default UserGroupList;
