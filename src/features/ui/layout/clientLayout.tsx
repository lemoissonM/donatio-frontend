import DonationForm from "@features/donations/form";
import { useUserProfile } from "@features/users/hooks/get-profile.hook";
import { User } from "@features/users/types/user-type";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../Loader";
import Aside from "./Aside";
import AsideActions from "./AsideActions";
import { UserContext } from "./hooks/user.context";
import Sidebar from "./sidebar";

const ClientLayout: React.FC = (props) => {
    const [showDonationForm, setShowDonationForm] = React.useState(false)
    const { pathname } = useLocation()
    const showAside = pathname.includes('/settings') || pathname.includes('/detail');
    const [showAsideSm, setShowAsideSm] = useState(false);

    return <React.Fragment>
        <Sidebar setShowAsideSm={() => setShowAsideSm(!showAsideSm)} show={showAsideSm} />
        <main className={`flex flex-col mt-10 sm:mt-1 h-full lg:mx-5 md:mx-0 md:mr-2 ${showAside ? 'md:flex-grow' : 'w-[60%]'} sm:w-[100%] sm:px-[20px] tablet:pr-3`}>
          <div className="flex flex-row">
            <button className="transition ease-in-out delay-150 bg-primary-900 sm:hidden text-white rounded-[15px] w-[150px] h-[40px] hover:-translate-y-1 hover:scale-110 hover:border-primary-900 py-2 hover:bg-primary-700" onClick={() => {setShowDonationForm(!showDonationForm)}}>Donate</button>
            {showAside && <div className="w-[200px] mt-2 ml-auto tablet:hidden">
              <AsideActions />
            </div>}
          </div>
          { showDonationForm && <DonationForm close={()=>{setShowDonationForm(false)}} /> }
          { props.children }
        </main>
        <Aside show={showAsideSm}/>
    </React.Fragment>
}

export default ClientLayout