import React from "react";
import DonationDetail from "@features/donations/detail";
import { useParams } from "react-router-dom";

const DonationDetailPage: React.FC = () => {
    const params = useParams();
    return (
        <div>
            <h1 className="mt-7 text-lg font-bold">DONATION DETAIL</h1>
            <DonationDetail id={params.id || ''} />
        </div>
    )
};

export default DonationDetailPage;