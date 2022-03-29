import { LoadingIcon } from '@features/ui/Loader/Icon';
import React from 'react';
import { useUserGroup } from './hooks/get-list.hook';
import UserGroupItem from './item';

const UserGroupList: React.FC = () => {
  const { data, isFetching } = useUserGroup();
  if (data)
    return (
      <div className="w-full mt-10 sm:mt-3 overflow-y-scroll md:grid md:grid-cols-2 md:gap-[30px]">
        {data?.map?.((userGroup) => (
          <UserGroupItem userGroup={userGroup} key={userGroup.id} />
        ))}
      </div>
    );

  if (isFetching)
    return (
      <div className="h-full mx-auto justify-center items-center content-center">
        <LoadingIcon />
        <p className="text-blue">Fetching data ...</p>
      </div>
    );
  return null;
};

export default UserGroupList;
