import React from "react"
import { useLocation } from "react-router-dom";
import { HomeIcon, SaveIcon, UserGroupIcon, AdjustmentsIcon, HandIcon } from "@heroicons/react/solid"
import  MenuItem  from './Item';
import { UserContext } from "../layout/hooks/user.context";

const menus = [
    { value: "Home", link: "/", icon: <HomeIcon width={22} className="mr-4" />, active: false },
    { value: "Saved Needs", link: "/needs/saved", icon: <SaveIcon width={22} className="mr-4" />, active: false },
    { value: "My donations", link: "/donations/me", icon: <HandIcon width={22} className="mr-4" />, active: false },
    { value: "My groups", link: "/groups/me", icon: <UserGroupIcon width={22} className="mr-4" />, active: false },
    { value: "Settings", link: "/settings", icon: <AdjustmentsIcon width={22} className="mr-4" />, active: false },
];

const menusAdmin = [
    { value: "Home", link: "/", icon: <HomeIcon width={22} className="mr-4" />, active: false },
    { value: "Needs", link: "/needs", icon: <SaveIcon width={22} className="mr-4" />, active: false },
    { value: "Donations", link: "/donations", icon: <HandIcon width={22} className="mr-4" />, active: false },
    { value: "Groups", link: "/groups", icon: <UserGroupIcon width={22} className="mr-4" />, active: false },
    { value: "Settings", link: "/settings", icon: <AdjustmentsIcon width={22} className="mr-4" />, active: false },
];

type PropTypes = {
    show: boolean,
    closeMenu: any,
}

const Menu: React.FC<PropTypes> = (props) => {
    const location = useLocation();
    const path = location.pathname;
    const isAdmin = true;

    return (
        <UserContext.Consumer>
            {user => <aside className={`bg-primary-200 lg:w-[250px] md:w-[220px]  lg:m-10 md:my-10 md:mx-5 tablet:mx-4 rounded-[15px] h-5/6 z-30 sm:w-4/5 transition-transform ease-linear delay-300 sm:fixed ${!props.show ? "sm:-translate-x-[110%]": "sm:translate-x-0"}`}>
                <ul className="list-reset p-6 pt-10">
                    {(user.role === 'admin' ? menusAdmin : menus).map((menu, index) => (
                        <MenuItem {...menu} index={index} active={menu.link === path} closeMenu={props?.closeMenu}/>
                    ))}
                </ul>
            </aside>}
        </UserContext.Consumer>
    )
}

export default Menu