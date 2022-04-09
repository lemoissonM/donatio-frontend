import React from 'react';
import { Donation } from './types/donation';
import { useNavigate } from 'react-router-dom';
import millify from 'millify';

type PropTypes = {
  donation: Donation;
};

const DonationItem: React.FC<PropTypes> = (props) => {
  const { donation } = props;
  const navigate = useNavigate();

  return (
    <div className="flex flex-row bg-primary-200 cursor-pointer rounded-[15px] p-3 sm:mb-6 tablet:w-full">
      <img src={donation?.need?.imgUrl} className="w-[30px] h-[30px] rounded-[5px]" />
      <div className="pt-1 flex-grow px-4">
        <h1 className="text-blue text-base tablet:text-sm font-semibold ">
          {donation?.need?.title}
        </h1>
        <div className="flex flex-row justify-between pt-2">
          <p className="text-primary-900 text-sm tablet:text-xs font-semibold mt-[10px]">
            Amount : $ {millify(donation?.totalDonated | 0, { precision: 2 })}
          </p>
          <p className="text-[#8F8F8F] text-sm tablet:text-xs font-medium mt-[10px]">1d ago</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-secondary-900 bg-secondary-300 w-[100px] tablet:w-[70px] pt-[4px] rounded-[15px] text-sm tablet:text-xs text-center font-semibold mt-[14px]">
            {donation?.status || 'pending'}
          </p>
          <button
            onClick={() => navigate(`/donations/detail/${donation.id}`)}
            className="bg-primary-900 text-white text-sm tablet:text-xs h-[30px] w-[70px] tablet:w-[50px] mt-[12px] hover:bg-primary-700 rounded-[15px]"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationItem;
