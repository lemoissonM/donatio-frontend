import Button from '@features/ui/Button';
import { LoadingIcon } from '@features/ui/Loader/Icon';
import React, { useState } from 'react';
import NeedForm from './form';
import { useNeeds } from './hooks/get-list.hook';
import NeedItem from './Item';

type propsType = {
  saved?: boolean;
  isAdmin?: boolean;
};

const NeedList: React.FC<propsType> = (props: propsType) => {
  const { isFetching, data } = useNeeds();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full md:mt-10 tablet:mt-3 overflow-y-scroll flex flex-col">
      {props.isAdmin ? (
        <Button
          onClick={() => {
            setShowForm(!showForm);
          }}
          backgroundColor="primary-900"
          label="Create Need"
          width="w-[200px] mb-5 mt-2 ml-2"
        />
      ) : null}
      <NeedForm
        isShowing={showForm}
        close={() => {
          setShowForm(false);
        }}
      />
      {isFetching && (
        <div className="mx-auto h-full justify-center items-center content-center">
          <LoadingIcon />
          <p className="text-blue">Fetching data ...</p>
        </div>
      )}
      {data?.map((n) => (
        <NeedItem need={n} key={n.id} />
      ))}
    </div>
  );
};

export default NeedList;
