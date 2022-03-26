import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AsideActions from "./AsideActions";
import Sidebar from "./sidebar";

const AdminLayout: React.FC = (props) => {
    const { pathname } = useLocation()
    const isHome = pathname === '/';
    const [showAsideSm, setShowAsideSm] = useState(false);

    return <React.Fragment>
      <Sidebar setShowAsideSm={() => setShowAsideSm(!showAsideSm)} show={showAsideSm} />
        <main className={`flex flex-col mt-10 sm:mt-1 h-full lg:mx-5 md:mx-0 md:mr-10 md:flex-grow sm:w-[100%] sm:px-[20px] tablet:pr-3`}>
          <p className="transition ease-in-out delay-150 mt-1  sm:hidden font-bold text-primary-900" >MANAGEMENT</p>
          <div className="absolute right-[60px] w-[200px] sm:hidden">
              <AsideActions />
          </div>
          <div className={`${!isHome ? 'md:mr-[40px]': ''}`}>
          { props.children }
          </div>
        </main>
    </React.Fragment>
}

export default AdminLayout