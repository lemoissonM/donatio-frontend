import { LoadingIcon } from '@features/ui/Loader/Icon';
import React from 'react';
import { useSavedNeeds } from './hooks/get-list-saved.hook';
import NeedItem from './Item';

type propsType = {
  saved?: boolean;
};

const SavedNeedList: React.FC<propsType> = () => {
  const { data } = useSavedNeeds();
  return (
    <div className="w-full mt-10 sm:mt-3 overflow-y-scroll flex flex-col md:pb-20 tablet:pb-60">
      {data?.map((n) => (
        <NeedItem need={n.need} key={n.id} saved savedNeedId={n.id} />
      ))}
    </div>
  );
};

export default SavedNeedList;
