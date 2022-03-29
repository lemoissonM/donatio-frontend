import React from 'react';
import { BellIcon, LogoutIcon } from '@heroicons/react/outline';
import { logout } from '@utils/auth';
import { UserContext } from './hooks/user.context';
import { UserCircleIcon } from '@heroicons/react/outline';

const AsideActions: React.FC = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <div className="flex flex-row-reverse text-primary-900 w-4/6 ml-auto justify-between">
            <LogoutIcon width={25} className="cursor-pointer" onClick={() => logout()} />
            {user?.imgUrl ? (
              <img className="rounded-full w-[25px] h-[25px]" src={user?.imgUrl} alt="profile" />
            ) : (
              <UserCircleIcon width={26} className="text-primary-900" />
            )}
            <BellIcon width={25} />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default AsideActions;
