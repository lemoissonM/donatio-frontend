import React, { Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingIcon } from '../Loader/Icon';
import AsideActions from './AsideActions';
import Sidebar from './sidebar';

const LoadingComponent = ({ isHome = false }) => (
  <div className="mx-auto my-auto mt-20 h-full justify-center items-center content-center">
    <LoadingIcon />
    <p className="text-blue">Fetching data ...</p>
  </div>
);

const AdminLayout: React.FC = (props) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [showAsideSm, setShowAsideSm] = useState(false);

  return (
    <React.Fragment>
      <Sidebar setShowAsideSm={() => setShowAsideSm(!showAsideSm)} show={showAsideSm} />
      <main
        className={`flex flex-col mt-10 sm:mt-1 h-full lg:mx-5 md:mx-0 md:mr-10 md:flex-grow sm:w-[100%] sm:px-[20px] tablet:pr-3`}
      >
        <p className="transition ease-in-out delay-150 mt-1  sm:hidden font-bold text-primary-900">
          MANAGEMENT
        </p>
        <div className="absolute right-[60px] w-[200px] sm:hidden">
          <AsideActions />
        </div>
        <Suspense fallback={<LoadingComponent />}>
          <div className={`${!isHome ? 'md:mr-[40px]' : ''}`}>{props.children}</div>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default AdminLayout;
