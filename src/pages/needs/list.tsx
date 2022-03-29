import React from 'react';
import NeedList from '@features/needs/list';

type PropType = {
  isAdmin: boolean;
};

const NeedListPage: React.FC<PropType> = (props) => {
  return <NeedList isAdmin={props.isAdmin} />;
};

export default NeedListPage;
