import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Need } from './types/need';
import DonateForm from '@features/donations/form';
import { useState } from 'react';
import { useSaveItem } from './hooks/save-item.hook';
import Button from '@features/ui/Button';
import { useDeleteItem } from './hooks/delete-item.hook';
import millify from 'millify';

type PropTypes = {
  need: Need;
  saved?: boolean;
  savedNeedId?: string;
};

const NeedItem: React.FC<PropTypes> = (props) => {
  const { need, saved, savedNeedId } = props;
  const [showDonation, setShowDonation] = useState(false);
  const mutation = useSaveItem();
  const deleteMutation = useDeleteItem();
  const navigate = useNavigate();
  return (
    <div
      className={` bg-secondary-100 transition-all ease-in delay-150 cursor-pointer rounded-[15px] md:mb-10 tablet:mb-5`}
    >
      <div
        className={`bg-primary-200 w-full rounded-[15px] sm:rounded-[10px] ${
          !showDonation ? 'h-[230px] sm:h-[370px]' : ''
        } flex flex-row sm:flex-col justify-between  sm:p-[2px] ${
          showDonation ? 'scale-95' : 'scale-100'
        } transition-all ease-in delay-150`}
      >
        <img
          onClick={() => {
            navigate(`/needs/detail/${need.id}`);
          }}
          src={need?.imgUrl}
          alt="home"
          className={`${
            showDonation ? 'h-[230px] sm:h-[170px]' : 'h-full sm:h-[150px]'
          } cursor-pointer  w-[25%] sm:w-[100%] rounded-tl-[15px] rounded-bl-[15px] sm:rounded-[10px] object-cover hover:-translate-x-0.5 hover:transition-all hover:ease-in-out hover:delay-150`}
        />
        <div className="flex-grow  lg:px-[35px] md:px-[10px] tablet:px-[10px] pt-2">
          <div
            onClick={() => {
              navigate(`/needs/detail/${need.id}`);
            }}
            className="flex flex-row  justify-between w-full"
          >
            <h1 className="text-black font-bold text-lg sm:text-sm  text-blue">{need?.title}</h1>
            <p className="text-blue text-sm">a day ago</p>
          </div>
          <p
            onClick={() => {
              navigate(`/needs/detail/${need.id}`);
            }}
            className="text-blue mt-4 text-justify text-sm h-[60px] overflow-hidden"
          >
            {need?.description}
          </p>
          <p
            onClick={() => {
              navigate(`/needs/detail/${need.id}`);
            }}
            className="mt-4 font-bold text-sm text-primary-900 "
          >
            Total needed :{' '}
            <span className="text-secondary-900"> $ {millify(need?.totalNeeded | 0)}</span>
          </p>
          <div className="mt-6 flex flex-row justify-between">
            <Button
              onClick={() => {
                if (!saved) mutation.mutate({ needId: need.id });
                if (saved && savedNeedId) deleteMutation.mutate(savedNeedId);
              }}
              isLoading={mutation.isLoading || deleteMutation.isLoading}
              backgroundColor={!saved ? 'secondary-900' : '[#FB1278]'}
              width="w-[45%]"
              type="secondary"
              label={
                saved
                  ? mutation.isLoading
                    ? 'Deleting '
                    : 'Delete'
                  : mutation.isLoading
                  ? 'Saving '
                  : 'Donate later'
              }
            />
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-primary-900 text-white rounded-[15px] w-[45%] xl:w-[200px] h-[40px] hover:border-primary-900 hover:border-2 hover:bg-primary-700"
              onClick={() => {
                setShowDonation(!showDonation);
              }}
            >
              Donate now
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          showDonation ? 'scale-95 -mt-8' : 'scale-0'
        } transition-all ease-in-out delay-300`}
      >
        {showDonation && <DonateForm needId={need.id} close={() => setShowDonation(false)} />}
      </div>
    </div>
  );
};

export default NeedItem;
