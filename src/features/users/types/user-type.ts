import { UserGroup } from '@features/user-groups/types/user-group';

type Group = {
  id: string;
  userId: string;
  userGroupId: string;
  role: string;
  userGroup: UserGroup;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imgUrl: string;
  monthlyObjective: number;
  address: string;
  city: string;
  state: string;
  countryName: string;
  phoneNumber: string;
  totalSum: number;
  totalSumMonth: number;
  role: string;
  groups: Group[];
};
