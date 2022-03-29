import { LoadingIcon } from '@features/ui/Loader/Icon';
import React from 'react';
import { useDonations } from './hooks/get-list-hooks';
import DonationItem from './item';

const DonationList: React.FC = () => {
  const { data, isFetching } = useDonations();
  return (
    <div className="w-full mt-10 sm:mt-3 overflow-y-scroll flex flex-col md:grid md:grid-cols-2 md:gap-[30px]">
      {data?.map((donation) => (
        <DonationItem donation={donation} key={donation.id} />
      ))}
      {isFetching && (
        <div className="h-full mx-auto justify-center items-center content-center">
          <LoadingIcon />
          <p className="text-blue">Fetching data ...</p>
        </div>
      )}
    </div>
  );
};

export default DonationList;
