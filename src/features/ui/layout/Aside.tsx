import React from "react";
import  { useNavigate } from "react-router-dom";
import Stat from "@features/ui/Stat";
import { BellIcon, LogoutIcon, MenuIcon} from "@heroicons/react/outline"
import profile from "@assets/images/volcano.jpeg";
import { logout } from "@utils/auth";
import { UserContext } from "./hooks/user.context";
import { useLocation } from "react-router-dom";
import AsideActions from "./AsideActions";


const Aside: React.FC<{show: boolean}> = (props) => {
    const { pathname } = useLocation()
    const isProfile = pathname.includes('/settings') || pathname.includes('/detail');
    const navigate = useNavigate();
    return (
      <aside className={` ${isProfile ? "w-0 invisible" : 'md:w-[25%] lg:w-[25%]'} drop-shadow-md lg:ml-10 md:ml-2 p-5 pl-[35px] pt-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] transition-transform ease-linear delay-300 tablet:fixed tablet:w-4/5 tablet:bg-white sm:mt-[100px] tablet:h-full ${props.show ? "sm:translate-x-1/4 tablet:translate-x-3/4": "sm:translate-x-[600px] tablet:translate-x-[800px]"}`}>
          <AsideActions />
          <Stat />
      </aside>
    )
}

export default Aside