import { UserContext } from '@features/ui/layout/hooks/user.context';
import { LoadingIcon } from '@features/ui/Loader/Icon';
import Select from '@features/ui/Select';
import React, { useContext } from 'react';
import { useUserList } from './hooks/get-all-users.hook';

const UserList: React.FC = () => {
  const user = useContext(UserContext);
  const groupId = user.visibleView.includes('group') ? user.visibleView.split('/')[1] : '';

  const { data } = useUserList(groupId);
  return (
    <div>
      <table className="table-fixed w-full p-5">
        <thead className="mx-5 text-blue w-full">
          <tr className="rounded-[20px] w-full">
            <th className=" rounded-tl-[10px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Full Name
            </th>
            <th className="text-blue font-semibold text-left pl-5 py-4 bg-primary-200">Email</th>
            <th className="text-blue font-semibold text-left pl-5 py-4 bg-primary-200">Phone</th>
            <th className="text-blue font-semibold text-left pl-5 py-4 bg-primary-200">Role</th>
            <th className="rounded-tr-[10px] text-blue font-semibold text-left pl-5 py-4 bg-primary-200">
              Actions
            </th>
          </tr>
        </thead>
        {data && (
          <tbody>
            {data.map((user, index) => (
              <tr
                key={user.id}
                className={`bg-primary-400 ${index % 2 === 0 ? 'bg-opacity-20' : 'bg-opacity-5'}`}
              >
                <td className="text-primary-900 font-semibold text-sm text-left pl-5 py-4 overflow-x-hidden">
                  {user.firstName} {user.lastName}
                </td>
                <td className="text-primary-900 font-normal text-sm text-left pl-5 pt-5 overflow-x-scroll">
                  {user.email}
                </td>
                <td className="text-primary-900 font-normal text-sm text-left pl-5 py-4 ">
                  {user.phoneNumber}
                </td>
                <td className="text-primary-900 font-normal text-sm text-left pl-5 py-4 ">
                  <Select
                    name="role"
                    options={[
                      { value: 'admin', label: 'admin' },
                      { value: 'user', label: groupId ? 'member' : 'user' },
                    ]}
                    defaultValue={user.role || 'user'}
                    register={() => {
                      // console.log('register');
                    }}
                    setValue={() => {
                      // console.log('setValue');
                    }}
                    color="#FB9512"
                    bg="#F7E6D0"
                    containerStyle="bg-secondary-100 mt-0"
                    style="px-0 max-w-[150px]"
                    showIndicator={false}
                  />
                </td>
                <td className="text-primary-900 font-normal text-sm text-left pl-5 py-4 "></td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UserList;
