import React from 'react';
import Stat from '@features/ui/Stat';
import { useLocation } from 'react-router-dom';
import AsideActions from './AsideActions';
import { XIcon } from '@heroicons/react/solid';

type PropTypes = {
  show: boolean;
  close?: any;
};

const Aside: React.FC<PropTypes> = (props) => {
  const { pathname } = useLocation();
  const isProfile = pathname.includes('/settings') || pathname.includes('/detail');

  return (
    <aside
      className={` z-50 ${
        isProfile ? 'w-0 invisible' : 'md:w-[25%] lg:w-[25%]'
      } drop-shadow-md lg:ml-10 md:ml-2 p-5 pl-[35px] pt-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] transition-transform ease-linear delay-300 tablet:fixed tablet:w-4/5 tablet:bg-white tablet:h-full ${
        props.show
          ? 'sm:translate-x-1/4 tablet:translate-x-3/4'
          : 'sm:translate-x-[600px] tablet:translate-x-[800px]'
      }`}
    >
      <XIcon
        width={25}
        className="text-primary-900 ml-auto md:hidden mb-5"
        onClick={() => {
          props?.close();
        }}
      />
      <AsideActions />
      <Stat />
    </aside>
  );
};

export default Aside;
