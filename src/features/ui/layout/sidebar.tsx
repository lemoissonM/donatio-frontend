import React from 'react';
import Menu from '@features/ui/Menu';
import { MenuIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, XIcon } from '@heroicons/react/solid';

type PropTypes = {
  show: boolean;
  setShowAsideSm: any;
  showNav?: boolean;
  setShowNav?: any;
};

const Sidebar: React.FC<PropTypes> = (props) => {
  const { showNav = false, setShowNav } = props;
  return (
    <nav className="md:h-full z-50 sm:mt-[20px]">
      <h1 className="text-black tablet:hidden font-bold text-2xl m-10 sm:m-5 flex flex-row">
        <MenuIcon
          width={25}
          className="mr-4"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
        Donatio{' '}
      </h1>
      <div className="flex md:hidden flex-row justify-between">
        <h1 className="text-black m font-bold text-2xl m-10 sm:m-5 flex flex-row">
          <MenuIcon
            width={25}
            className={`mr-4 ${showNav ? 'invisible' : ''}`}
            onClick={() => {
              setShowNav(!showNav);
            }}
          />
          Donatio
        </h1>
        {!props.show ? (
          <DotsHorizontalIcon
            onClick={props.setShowAsideSm}
            width={25}
            className={`mr-6 ${!showNav ? 'text-primary-900' : 'text-white'} -mt-2`}
          />
        ) : (
          <XIcon
            onClick={props.setShowAsideSm}
            width={25}
            className="mr-6 text-primary-900 -mt-2"
          />
        )}
      </div>
      {showNav && (
        <XIcon
          onClick={() => {
            setShowNav(false);
          }}
          className="z-50 text-white mr-5 absolute top-0 mt-10 ml-3"
          width={30}
        />
      )}
      <Menu
        show={showNav}
        closeMenu={() => {
          setShowNav(false);
        }}
      />
    </nav>
  );
};

export default Sidebar;
