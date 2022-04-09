import React from 'react';
import DonationDetail from '@features/donations/detail';
import { useParams } from 'react-router-dom';

const DonationDetailPage: React.FC<{ isAdmin?: boolean }> = (props) => {
  const params = useParams();
  return (
    <div>
      <h1 className="md:mt-7 sm:mt-2 text-lg font-bold">DONATION DETAIL</h1>
      <DonationDetail id={params.id || ''} isAdmin={props.isAdmin} />
    </div>
  );
};

export default DonationDetailPage;
