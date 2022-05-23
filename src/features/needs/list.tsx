import Button from '@features/ui/Button';
import { UserContext } from '@features/ui/layout/hooks/user.context';
import React, { useContext, useState } from 'react';
import NeedForm from './form';
import { useNeeds } from './hooks/get-list.hook';
import NeedItem from './Item';

type propsType = {
  saved?: boolean;
  isAdmin?: boolean;
};

const NeedList: React.FC<propsType> = (props: propsType) => {
  const user = useContext(UserContext);
  const groupId = user.visibleView.includes('group') ? user.visibleView.split('/')[1] : '';

  const { data } = useNeeds(groupId);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full md:mt-10 tablet:mt-3 overflow-y-scroll flex flex-col h-screen z-30">
      {props.isAdmin ? (
        <Button
          onClick={() => {
            setShowForm(!showForm);
          }}
          backgroundColor="primary-900"
          label="Create Need"
          width="w-[200px] mb-5 mt-2 ml-0"
          height="py-4"
        />
      ) : null}
      <NeedForm
        isShowing={showForm}
        close={() => {
          setShowForm(false);
        }}
      />
      <div
        className="h-screen overflow-y-scroll flex flex-col md:pb-20 tablet:pb-60"
        id="need-list"
      >
        {data?.map((n) => (
          <NeedItem need={n} key={n.id} />
        ))}
      </div>
    </div>
  );
};

export default NeedList;
