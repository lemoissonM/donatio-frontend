import React from "react";
import image from '../../assets/images/volcano.jpeg';
import { Need } from "@features/needs/types/need";
import DonateForm from "@features/donations/form"
import { useState } from "react";
import NeedDetail from "@features/needs/detail";
import { useParams } from "react-router-dom";


const NeedDetailPage: React.FC = (props) =>  {
  const params = useParams();
  return (
    <div className="flex flex-col">
      <h1 className="md:mt-7 sm:mt-2 text-lg font-bold">EVENT DETAIL</h1>
      <div className="flex-grow">
        <NeedDetail id={params.id || ''} showFullDescription />
      </div>
    </div>
  )
}

export default NeedDetailPage;