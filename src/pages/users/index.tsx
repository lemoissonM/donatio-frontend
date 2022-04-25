import UserList from '@features/users/list';
import React from 'react';

const UserListPage: React.FC = () => {
  return (
    <div>
      <h1 className="md:mt-10 md:mb-5 sm:mt-2 text-base font-bold">USER LIST</h1>
      <UserList />
    </div>
  );
};

export default UserListPage;
