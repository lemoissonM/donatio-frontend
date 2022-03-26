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
    <div>
      <h1 className="mt-7 text-lg font-bold">EVENT DETAIL</h1>
      <NeedDetail id={params.id || ''} />
    </div>
  )
}

export default NeedDetailPage;