import { UserContext } from '@features/ui/layout/hooks/user.context';
import { LoadingIcon } from '@features/ui/Loader/Icon';
import React, { useContext } from 'react';
import { useDonations } from './hooks/get-list-hooks';
import DonationItem from './item';

const DonationList: React.FC = () => {
  const user = useContext(UserContext);
  const groupId = user.visibleView.includes('group') ? user.visibleView.split('/')[1] : '';
  const { data } = useDonations(groupId);
  return (
    <div className="w-full mt-10 sm:mt-3 overflow-y-scroll flex flex-col md:grid md:grid-cols-2 md:gap-[30px] pb-10">
      {data?.map((donation) => (
        <DonationItem donation={donation} key={donation.id} />
      ))}
    </div>
  );
};

export default DonationList;
