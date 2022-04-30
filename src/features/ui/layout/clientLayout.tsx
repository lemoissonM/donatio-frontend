import DonationForm from '@features/donations/form';
import React, { Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingIcon } from '../Loader/Icon';
import Aside from './Aside';
import AsideActions from './AsideActions';
import Sidebar from './sidebar';

const LoadingComponent = ({ showAside = false }) => (
  <div
    className={`flex flex-col mt-10 sm:mt-1 h-full lg:mx-5 md:mx-0 md:mr-2 ${
      showAside ? 'md:flex-grow' : 'w-[60%]'
    } sm:w-[100%] sm:px-[20px] tablet:pr-3`}
  >
    <div className="mx-auto h-full justify-center items-center content-center">
      <LoadingIcon />
      <p className="text-blue">Fetching data ...</p>
    </div>
  </div>
);

const ClientLayout: React.FC = (props) => {
  const [showDonationForm, setShowDonationForm] = React.useState(false);
  const { pathname } = useLocation();
  const showAside = pathname.includes('/settings') || pathname.includes('/detail');
  const [showAsideSm, setShowAsideSm] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Sidebar
        showNav={showNav}
        setShowNav={setShowNav}
        setShowAsideSm={() => setShowAsideSm(!showAsideSm)}
        show={showAsideSm}
      />
      <Suspense fallback={<LoadingComponent showAside={showAside} />}>
        <main
          className={`flex flex-col mt-10 sm:mt-1 h-full lg:mx-5 md:mx-0 md:mr-2 ${
            showAside ? 'md:flex-grow' : 'w-[60%]'
          } sm:w-[100%] sm:px-[20px] tablet:pr-3`}
        >
          <div className="flex flex-row">
            <button
              className="transition ease-in-out delay-150 bg-primary-900 sm:hidden text-white rounded-[15px] px-4 h-[40px] hover:-translate-y-1 hover:scale-110 hover:border-primary-900 py-2 hover:bg-primary-700"
              onClick={() => {
                setShowDonationForm(!showDonationForm);
              }}
            >
              Make general donation
            </button>
            {showAside && (
              <div className="w-[200px] mt-2 ml-auto tablet:hidden">
                <AsideActions />
              </div>
            )}
          </div>
          {showDonationForm && (
            <DonationForm
              close={() => {
                setShowDonationForm(false);
              }}
            />
          )}
          {props.children}
        </main>
      </Suspense>
      <div
        onClick={() => {
          setShowAsideSm(false);
        }}
        className={`sm:bg-[#000] w-full h-full md:hidden z-40 absolute ${
          !showAsideSm && !showNav ? 'sm:hidden' : ''
        } sm:bg-opacity-50`}
      />
      <Aside
        show={showAsideSm}
        close={() => {
          setShowAsideSm(false);
        }}
      />
    </>
  );
};

export default ClientLayout;
