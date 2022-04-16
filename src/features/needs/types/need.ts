export type NeedDonationProof = {
  id: string;
  proofUrl: string;
  proofType: string;
  proof: string;
  totalAmount: number;
};

export type Need = {
  id: string;
  title: string;
  description: string;
  totalNeeded: number;
  publisherId: string;
  imgUrl: string;
  donationProofs: NeedDonationProof[];
  myContribution: number;
  totalContribution: number;
};
