import React from 'react';

type PropType = {
  Icon: React.ReactNode;
  title: string;
  value: string;
};

const ProfileItem: React.FC<PropType> = (props: PropType) => {
  const { Icon, title, value } = props;
  return (
    <div className="flex flex-row items-start mt-7">
      {Icon}
      <div className="ml-6">
        <h1 className="text-blue text-sm font-bold">{title}</h1>
        <p className="text-sm text-primary-900 mt-3">{value}</p>
      </div>
    </div>
  );
};

export default ProfileItem;
