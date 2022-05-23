import { Need } from '@features/needs/types/need';

export const mockedNeed: Need = {
  id: '1',
  title: 'Need 1',
  description: 'Need 1 description',
  imgUrl: 'https://via.placeholder.com/150',
  totalNeeded: 100,
  totalContribution: 50,
  publisherId: 'ee',
  donationProofs: [],
  myContribution: 200,
};

export const mockedNeedList: Need[] = [mockedNeed, { ...mockedNeed, id: '2' }];
