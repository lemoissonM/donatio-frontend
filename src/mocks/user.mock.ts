import { User } from '@features/users/types/user-type';

export const mockedUser: User = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@email.com',
  role: 'admin',
  id: '1',
  monthlyObjective: 2000,
  totalSum: 200,
  totalSumMonth: 100,
  address: 'Mabanga Sud',
  phoneNumber: '+254712345678',
  city: 'Goma',
  state: 'North Kivu',
  countryName: 'DRC',
  imgUrl: 'https://via.placeholder.com/150',
  groups: [],
};

export const mockedUserList: User[] = [mockedUser, { ...mockedUser, id: '2' }];
