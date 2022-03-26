import React from "react";
import { useDonationDetail } from "./hooks/get-detail-hooks";
import NeedDetail from "@features/needs/detail";
import { LoadingIcon } from "@features/ui/Loader/Icon";

type PropTypes = {
  id: string
}

const DonationDetail: React.FC<PropTypes> = (props) =>  {
  const { data: donation, isFetching} = useDonationDetail(props.id)

  if(donation) return (
    <div>
      <div className="flex md:flex-row tablet:flex-col md:justify-between">
        <div className="md:w-[65%] tablet:w-full tablet:h-auto">
          <NeedDetail need={donation?.need} showButton={false} showFullDescription={false} />
        </div>
        <div className="bg-primary-200 p-4 mt-8 md:h-[160px] tablet:mb-7 rounded-[15px] md:w-[30%] tablet:w-full">
            <p className="font-bold text-sm  text-primary-900 w-full flex-row flex">My total contribution <span className="text-secondary-900 text-sm ml-auto">1 day</span>  </p> 
            <p className="lg:text-[30px] md:text-[25px] text-blue font-bold mt-5">+ $ {donation.myContribution}</p>
            <p className="text-blue mt-4 text-sm font-semibold">Via airtel money</p>
        </div>
      </div>
      <h1 className="font-bold text-base mb-[30px] text-primary-900">PROOFS</h1>
      <div className="flex md:flex-row tablet:flex-col overflow-x-scroll">
        <div className="bg-secondary-200 md:w-[250px] tablet:mb-7 tablet:w-full  h-[220px] rounded-[15px] pl-[15px] mr-[40px]">
          <h1 className="text-blue mb-[15px] mt-[10px] text-sm font-bold">Sample</h1>
          <img src={donation.need.imgUrl} className="w-[215px] h-[160px] rounded-[15px]"/>
        </div>
      </div>
    </div>
  ) 
  return <div className="flex">
        {isFetching && <div className="mx-auto h-full justify-center items-center content-center">
            <LoadingIcon />
            <p className="text-blue">Fetching data ...</p>
          </div>
        }
    </div>;
}

export default DonationDetail;