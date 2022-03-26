import React from "react";
import  { useNavigate } from "react-router-dom";
import Stat from "@features/ui/Stat";
import { BellIcon, LogoutIcon, MenuIcon} from "@heroicons/react/outline"
import profile from "@assets/images/volcano.jpeg";
import { logout } from "@utils/auth";
import { UserContext } from "./hooks/user.context";
import { useLocation } from "react-router-dom";


const AsideActions: React.FC = () => {
    return (
        <UserContext.Consumer >
        { user  => {
        return <div className="flex flex-row-reverse text-primary-900 w-4/6 ml-auto justify-between">
          <LogoutIcon width={25} className="cursor-pointer" onClick={() => logout()} />
          <img className="rounded-full w-[25px] h-[25px]" src={user?.imgUrl} alt="profile" />
          <BellIcon width={25} />
        </div> }}
      </UserContext.Consumer>
    )
}

export default AsideActions