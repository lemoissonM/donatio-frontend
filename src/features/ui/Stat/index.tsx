import millify from 'millify';
import React from 'react';
import { useQueryClient } from 'react-query';
import { UserContext } from '../layout/hooks/user.context';
import './animation.css';

const Stat: React.FC = () => {
  const queryClient = useQueryClient();
  const profileLoading = queryClient.getQueryState('user-profile');
  const getProgress = (monthlyContribution: number, actualContribution: number) => {
    if (monthlyContribution === 0) return 0;
    let progress = Math.round((actualContribution / monthlyContribution) * 100);
    if (progress > 100) progress = 100;
    return progress;
  };
  return (
    <UserContext.Consumer>
      {(data) => {
        let progress = getProgress(data.monthlyObjective || 0, data?.totalSumMonth || 0);
        if (Number.isNaN(progress)) progress = 0;
        return (
          <div className="mt-10">
            <p className="font-bold text-sm text-blue">Month objective</p>
            <div className="w-full h-[30px] bg-primary-200 rounded-full mt-7">
              <div
                className={`h-[30px] pt-2 bg-primary-400 rounded-full  text-center text-sm text-primary-900 font-bold content-center`}
                style={{ width: `${progress}%` }}
              >
                {progress > 0 ? `${progress}%` : ''}
              </div>
            </div>
            <div
              className={`bg-primary-200 p-4 mt-12 ${
                profileLoading?.isFetching ? 'primary-stat-color-animate' : ''
              } rounded-[15px]`}
            >
              <div className="flex lg:flex-row lg:justify-between md:flex-col">
                <p className="font-bold text-sm mt-1 text-blue mr-3">Month of </p>
                <div>
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    className="text-blue bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ml-auto  rounded-lg text-xs px-4 py-1 text-center inline-flex items-center  shadow-none"
                    type="button"
                  >
                    April{' '}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul className="py-1" aria-labelledby="dropdownButton">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="lg:text-[30px] md:text-[25px] text-primary-900 font-semibold mt-5">
                + $ {millify(data?.totalSumMonth | 0)}
              </p>
            </div>
            <div
              className={`bg-secondary-100 p-4 mt-12 rounded-[15px] ${
                profileLoading?.isFetching ? 'secondary-stat-color-animate' : ''
              }`}
            >
              <p className="font-bold text-sm  text-blue">Total contribution </p>
              <p className="lg:text-[30px] md:text-[25px] text-secondary-900 font-semibold mt-5">
                + $ {millify(data?.totalSum | 0)}
              </p>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Stat;
