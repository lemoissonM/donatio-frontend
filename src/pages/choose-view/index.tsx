import { UserContext } from '@features/ui/layout/hooks/user.context';
import React from 'react';

const ChooseView: React.FC = () => {
  const GroupItem = (img: string, name: string, onClick: any) => (
    <div
      className="flex flex-col w-[150px] rounded-[10px] pb-3 bg-primary-300 mx-5 mt-3 cursor-pointer"
      onClick={onClick}
    >
      <img className="w-full h-[100px] object-cover rounded-t-[15px]" src={img} alt={name} />
      <p className="text-center text-sm text-blue font-semibold mt-2">{name}</p>
    </div>
  );
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <div className="flex flex-col items-center content-center h-screen justify-center">
            <h1 className=" text-[35px] font-bold text-center text-blue mb-5">
              Welcome back{' '}
              <span className="text-primary-900">{`${user.firstName} ${user.lastName}`}</span>
            </h1>
            <h2 className=" text-[17px] my-5 font-semibold text-center text-primary-900">
              Continue as :
            </h2>
            <div className="flex flex-row">
              {user?.groups?.map((item, index) => {
                return GroupItem(item.userGroup.imgUrl, item.userGroup.name, () => {
                  user.setVisibleView?.(`group/${item.userGroupId}`);
                });
              })}
              {user.role === 'admin' &&
                GroupItem(user.imgUrl, 'Super admin', () => user.setVisibleView?.('admin'))}
              {GroupItem(user.imgUrl, user.firstName, () => user.setVisibleView?.('user'))}
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ChooseView;
