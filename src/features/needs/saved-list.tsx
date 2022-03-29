import { LoadingIcon } from '@features/ui/Loader/Icon';
import React from 'react';
import { useSavedNeeds } from './hooks/get-list-saved.hook';
import NeedItem from './Item';

type propsType = {
  saved?: boolean;
};

const SavedNeedList: React.FC<propsType> = () => {
  const { isFetching, data } = useSavedNeeds();
  console.log(data);
  return (
    <div className="w-full mt-10 sm:mt-3 overflow-y-scroll flex flex-col">
      {isFetching && (
        <div className="mx-auto h-full justify-center items-center content-center">
          <LoadingIcon />
          <p className="text-blue">Fetching data ...</p>
        </div>
      )}
      {data?.map((n) => (
        <NeedItem need={n.need} key={n.id} saved savedNeedId={n.id} />
      ))}
    </div>
  );
};

export default SavedNeedList;
