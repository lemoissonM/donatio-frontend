import React from 'react';
import { UserContext } from '@features/ui/layout/hooks/user.context';
import { CurrencyDollarIcon, UserCircleIcon } from '@heroicons/react/outline';
import ProfileData from './profile-data';

const Profile: React.FC = () => {
  return (
    <UserContext.Consumer>
      {(data) => (
        <div className="pt-10 md:flex-row sm:flex-col flex justify-between md:mr-10">
          <div className="md:w-[30%] sm:w-[100%[">
            <div className="flex flex-col  bg-primary-200 p-5 rounded-[15px]">
              {data.imgUrl ? (
                <img src={data.imgUrl} className="rounded-full w-[100px] h-[100px] mx-auto" />
              ) : (
                <UserCircleIcon width={100} className="text-primary-900 mx-auto" />
              )}
              <p className="mt-[20px] mx-auto font-bold">
                {data?.firstName} {data?.lastName}
              </p>
            </div>

            <div className="flex flex-col  bg-primary-200 p-5 mt-10 rounded-[15px]">
              <p className="ml-[30px] font-semibold text-[13px]">Contribution month</p>
              <p className="mt-[5px] font-semibold text-sm text-primary-900 flex flex-row">
                <CurrencyDollarIcon width={25} />{' '}
                <span className="text-white text-xs text-center ml-[5px] mt-[3px] px-[20px] bg-secondary-900 p-[5px] rounded-[20px] ">
                  {' '}
                  $ {data?.totalSumMonth}{' '}
                </span>
              </p>

              <p className="ml-[30px] mt-[15px] font-semibold text-[13px]">Total Contribution</p>
              <p className="mt-[5px] font-semibold text-sm text-primary-900 flex flex-row">
                <CurrencyDollarIcon width={25} />{' '}
                <span className="text-white text-xs text-center ml-[5px] mt-[3px] px-[20px] bg-secondary-900 p-[5px] rounded-[20px] ">
                  {' '}
                  $ {data?.totalSum}{' '}
                </span>
              </p>
            </div>
          </div>
          <ProfileData data={data} />
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Profile;
