import React from "react"
import { useQueryClient } from "react-query"
import { UserContext } from "../layout/hooks/user.context";
import "./animation.css"


const Stat: React.FC = () => {
    const queryClient = useQueryClient();
    const profileLoading = queryClient.getQueryState("user-profile");
    return (
        <UserContext.Consumer>
          {data => <div className="mt-10">
          <p className="font-bold text-sm text-blue">Month objective</p>
          <div className="w-full h-[30px] bg-primary-200 rounded-full mt-7">
              <div className={`h-[30px] pt-2 bg-primary-400 rounded-full w-[${(50)}%]  text-center text-sm text-primary-900 font-bold content-center`} style={{width: '50%'}}>50 %</div>
          </div>
          <div className={`bg-primary-200 p-4 mt-12 ${profileLoading?.isFetching ? 'primary-stat-color-animate': ''} rounded-[15px]`}>
            <div className="flex lg:flex-row lg:justify-between md:flex-col">
              <p className="font-bold text-sm mt-1 text-blue">Month of   </p> 
              <div>
                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="text-blue bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-xs px-4 py-1 text-center inline-flex items-center  shadow-none" type="button">April <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="dropdownButton">
                      <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
            <p className="lg:text-[30px] md:text-[25px] text-primary-900 font-semibold mt-5">+ $ {data?.totalSumMonth}</p>
          </div>
          <div className={`bg-secondary-100 p-4 mt-12 rounded-[15px] ${profileLoading?.isFetching ? 'secondary-stat-color-animate': ''}`}>
            <p className="font-bold text-sm  text-blue">Total contribution  </p> 
            <p className="lg:text-[30px] md:text-[25px] text-secondary-900 font-semibold mt-5">+ $ {data?.totalSum}</p>
          </div>

        </div>}
      </UserContext.Consumer>
    )
}

export default Stat