import React from 'react';
import { useDonationDetail } from './hooks/get-detail-hooks';
import NeedDetail from '@features/needs/detail';
import { LoadingIcon } from '@features/ui/Loader/Icon';
import millify from 'millify';
import Button from '@features/ui/Button';
import DonationProofForm from './donationProofForm';

type PropTypes = {
  id: string;
  isAdmin?: boolean;
};

const DonationDetail: React.FC<PropTypes> = (props) => {
  const { data: donation } = useDonationDetail(props.id);
  const [showDonationFormProof, setShowDonationFormProof] = React.useState(false);

  return (
    <div>
      <div className="flex md:flex-row tablet:flex-col md:justify-between">
        <div className="md:w-[65%] tablet:w-full tablet:h-auto">
          <NeedDetail id={donation?.needId} showButton={false} showFullDescription={false} />
        </div>
        <div className="bg-primary-200 p-4 mt-8 md:h-[160px] tablet:mb-7 rounded-[15px] md:w-[30%] tablet:w-full">
          <p className="font-bold text-sm  text-primary-900 w-full flex-row flex">
            My total contribution <span className="text-secondary-900 text-sm ml-auto">1 day</span>{' '}
          </p>
          <p className="lg:text-[30px] md:text-[25px] text-blue font-bold mt-5">
            + $ {millify(donation?.myContribution || 0)}
          </p>
          <p className="text-blue mt-4 text-sm font-semibold">Via airtel money</p>
        </div>
      </div>
      <div className="flex flex-row content-center mb-[30px] items-center">
        <h1 className="font-bold text-base  text-primary-900">PROOFS</h1>
        {props.isAdmin && (
          <Button
            backgroundColor="primary-900"
            label="Add"
            width="h-[30px] px-6 ml-5 text-sm"
            onClick={() => {
              setShowDonationFormProof(true);
            }}
          />
        )}
      </div>
      <div className="flex md:flex-row tablet:flex-col overflow-x-scroll">
        {donation?.need.donationProofs.map((proof) => (
          <div
            key={proof.id}
            className="bg-secondary-200 md:w-[250px] tablet:mb-7 tablet:w-full  h-[240px] rounded-[15px] pl-[15px] mr-[40px]"
          >
            <h1 className="text-blue mb-[15px] mt-[10px] text-sm font-bold">{proof.proof}</h1>
            <img src={proof.proofUrl} className="w-[215px] h-[160px] rounded-[15px]" />
            <p className="text-blue text-sm mt-2">
              Amount : <strong>$ {proof.totalAmount}</strong>
            </p>
          </div>
        ))}
      </div>
      {props.isAdmin && (
        <DonationProofForm
          isShowing={showDonationFormProof}
          close={() => {
            setShowDonationFormProof(false);
          }}
          needId={donation?.needId}
        />
      )}
    </div>
  );
};

export default DonationDetail;
