import DashboardChart from '@features/dashboard/chart';
import { useDonations } from '@features/donations/hooks/get-list-hooks';
import DonationItem from '@features/donations/item';
import { UserContext } from '@features/ui/layout/hooks/user.context';
import { UserCircleIcon } from '@heroicons/react/outline';
import millify from 'millify';
import React, { useContext } from 'react';
import { useDonationCount } from './hooks/get-donation-count.hook';
import { useTopContributors } from './hooks/get-top-contributors.hook';

const DashboardPage: React.FC = () => {
  const user = useContext(UserContext);
  const groupId = user.visibleView.includes('group') ? user.visibleView.split('/')[1] : '';
  const donation = useDonations(groupId);
  const topContributors = useTopContributors(groupId);
  const donationCount = useDonationCount(groupId);

  return (
    <div className="w-full md:mt-11 sm:mt-3">
      <div className="flex md:flex-row sm:flex-col justify-between md:mr-10">
        <div className="md:w-[65%] sm:w-full">
          <DashboardChart />
          <h1 className="my-10 text-blue text-base font-bold">RECENT DONATIONS</h1>
          <div className="md:grid md:grid-cols-2 w-100 md:gap-10 sm:flex sm:flex-row sm:overflow-x-scroll md:overflow-y-scroll md:max-h-[230px]">
            {donation.data?.map((d) => (
              <div className="sm:w-[320px] sm:mr-4" key={d.id}>
                <DonationItem donation={d} />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[30%] sm:w-full">
          <>
            <div className="bg-primary-200 px-4 py-8 rounded-[15px] w-full">
              <p className="font-bold text-base  text-primary-900">Total raised </p>
              <p className="lg:text-[40px] md:text-[25px] text-blue font-semibold mt-5">
                $ {millify(donationCount?.data?.total.sum || 0)}{' '}
              </p>
            </div>

            <div className="bg-secondary-100 px-4 py-8 rounded-[15px] w-full mt-10">
              <p className="font-bold text-base  text-primary-900">Total Used </p>
              <p className="lg:text-[40px] md:text-[25px] text-blue font-semibold mt-5">
                $ {millify(donationCount?.data?.used.sum || 0)}
              </p>
            </div>

            <div className="bg-primary-200 px-4 py-4 rounded-[15px] w-full mt-10">
              <p className="font-bold text-base  text-primary-900 mb-3">Top contributors </p>
              {topContributors.data?.map((user: any) => (
                <div className="flex flex-row mt-5" key={user['users_id']}>
                  {user['users_imgUrl'] ? (
                    <img
                      src={user['users_imgUrl']}
                      alt="volcano"
                      className="w-[20px] h-[20px] rounded-full mr-4"
                    />
                  ) : (
                    <UserCircleIcon
                      width={20}
                      className="text-primary-900 w-[20px] h-[20px] rounded-full mr-4"
                    />
                  )}
                  <p className="text-blue text-sm font-semibold">{`${user['users_firstName']} ${user['users_lastName']}`}</p>
                  <p className="text-secondary-900 font-semibold text-sm ml-auto">
                    $ {millify(user['sum'])}
                  </p>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
