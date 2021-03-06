import React from 'react';
import { Need } from '@features/needs/types/need';
import DonateForm from '@features/donations/form';
import { useState } from 'react';
import { useDetailNeed } from './hooks/get-detail.hook';
import { LoadingIcon } from '@features/ui/Loader/Icon';
import { Helmet } from 'react-helmet';
import millify from 'millify';

type PropTypes = {
  id?: string;
  showButton?: boolean;
  showProgress?: boolean;
  showFullDescription?: boolean;
  need?: Need;
};

const NeedDetail: React.FC<PropTypes> = (props) => {
  const saved = false;
  const { showButton = true, showProgress = true, showFullDescription = true } = props;
  let need = props.need;
  if (props.id) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useDetailNeed(props.id);
    need = data;
  }
  let progress = 0;
  if (need?.totalNeeded) progress = (need?.totalContribution || 0 / need?.totalNeeded) * 100;
  if (progress > 100) progress = 100;
  const [showDonation, setShowDonation] = useState(false);
  return (
    <div
      className={`bg-secondary-100 mt-8 rounded-[15px] overflow-y-scroll mb-10 ${
        showDonation ? 'p-0' : ''
      }`}
    >
      <Helmet>
        <title>{need?.title}</title>
        <meta name="description" content={need?.description} />
        <meta property="og:title" content={need?.title} />
        <meta property="og:description" content={need?.description} />
        <meta property="og:image" content={need?.imgUrl} />
      </Helmet>
      {need && (
        <div
          className={`bg-primary-200  h-fit w-full rounded-[15px] sm:rounded-[10px] ${
            showDonation ? ' sm:h-[370px]' : ''
          }  flex flex-row sm:flex-col justify-between  sm:p-[2px]`}
        >
          <img
            src={need?.imgUrl}
            alt="home"
            className={`${
              showDonation ? 'sm:h-[370px]' : 'sm:h-[150px]'
            }  w-[32%] sm:w-[100%] rounded-tl-[15px] rounded-bl-[15px] sm:rounded-[10px] object-cover`}
          />
          <div className="flex-grow  lg:px-[35px] md:px-[10px] tablet:px-[10px] pt-2">
            <div className="flex flex-row  justify-between w-full">
              <h1 className="text-black font-bold text-lg sm:text-base   text-blue">
                {need?.title}
              </h1>
              <p className="text-blue text-sm">a day ago</p>
            </div>
            <p
              className={`text-blue mt-4 text-justify text-base leading-7 ${
                !showFullDescription ? 'h-[110px] overflow-y-hidden' : ''
              }`}
            >
              {need?.description}
            </p>

            {showProgress && (
              <div className="flex flex-row w-full justify-between mt-5">
                <div className="mr-10 flex-grow h-[30px] bg-primary-300 rounded-full">
                  <div
                    className={`h-[30px] pt-2 bg-primary-600 rounded-full  text-center text-sm text-primary-900 font-bold content-center`}
                    style={{ width: `${progress}%` }}
                  >
                    {progress} %
                  </div>
                </div>
                <p className="text-primary-900  font-bold">
                  {' '}
                  {millify(need.totalContribution || 0)} raised
                </p>
              </div>
            )}

            <p className="mt-4 font-bold text-base text-primary-900 mb-3">
              Total needed :{' '}
              <span className="text-secondary-900"> {millify(need?.totalNeeded | 0)} USD</span>
            </p>

            {showButton && (
              <div className="mt-6 flex flex-row justify-between mb-10">
                <button
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 ${
                    !saved ? 'bg-secondary-900' : 'bg-[#FB1278]'
                  } mr-10 text-white rounded-[15px] w-[45%] xl:w-[200px] h-[40px] hover:${
                    !saved ? 'bg-secondary-900' : 'bg-[#FB1278]'
                  } hover:border-2 hover:${!saved ? 'bg-secondary-900' : 'bg-[#FB1278]'}`}
                >
                  {saved ? 'Withdraw' : 'Save'}
                </button>
                <button
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-primary-900 text-white rounded-[15px] w-[45%] xl:w-[200px] h-[40px] hover:border-primary-900 hover:border-2 hover:bg-primary-700"
                  onClick={() => {
                    setShowDonation(!showDonation);
                  }}
                >
                  Donate
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {showDonation && (
        <div className="absolute z-[100] h-full top-0 bg-primary-900 bg-opacity-20 flex  flex-col justify-center  w-full left-0 px-5 my-auto">
          <div className="sm:w-full md:w-[50%] mx-auto">
            <DonateForm needId={need?.id} close={() => setShowDonation(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NeedDetail;
