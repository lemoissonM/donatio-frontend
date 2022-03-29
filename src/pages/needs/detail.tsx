import React from 'react';
import NeedDetail from '@features/needs/detail';
import { useParams } from 'react-router-dom';

const NeedDetailPage: React.FC = () => {
  const params = useParams();
  return (
    <div className="flex flex-col">
      <h1 className="md:mt-7 sm:mt-2 text-lg font-bold">EVENT DETAIL</h1>
      <div className="flex-grow">
        <NeedDetail id={params.id || ''} showFullDescription />
      </div>
    </div>
  );
};

export default NeedDetailPage;
