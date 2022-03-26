import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    index: number;
    value: string;
    link: string;
    icon: React.ReactNode;
    active: boolean;
    closeMenu: any;
}

const Item: React.FC<Props> = (menu: Props) => {
  const navigate = useNavigate();
  return <li onClick={() => {navigate(menu.link); menu?.closeMenu()}} key={menu.index} className={`flex items-center p-3 mb-6 h-[45px] hover:bg-[#DEE6F5] hover:rounded-[15px] cursor-pointer ${menu.active ? 'bg-[#DEE6F5] rounded-[15px]' : ''}`}>
            <span   className="text-primary-900 font-medium flex flex-row">{menu.icon}{menu.value}</span>
        </li>;
}

export default Item;
  