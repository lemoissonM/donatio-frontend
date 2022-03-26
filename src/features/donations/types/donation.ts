import { Need } from "@features/needs/types/need";

export type Donation = {
    imgUrl: string;
    id: string;
    userId: string;
    needId: string;
    totalDonated: number;
    paymentWay: string;
    status: string;
    paymentMetadata: any;
    need: Need;
    myContribution: number;
}
