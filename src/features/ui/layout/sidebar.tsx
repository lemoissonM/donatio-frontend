import Menu  from "@features/ui/Menu"
import { MenuIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react"

type PropTypes = {
  show: boolean,
  setShowAsideSm: any
}

const Sidebar: React.FC<PropTypes> = (props) => {
    const [showNav, setShowNav] = useState(false);
    return (
        <nav className="md:h-full sm:mt-[20px]">
          <h1 className="text-black tablet:hidden m font-bold text-2xl m-10 sm:m-5 flex flex-row"><MenuIcon width={25} className="mr-4" onClick={()=>{
          setShowNav(!showNav);
          }}/>Donatio </h1>
        <div className="flex md:hidden flex-row justify-between">
          <h1 className="text-black m font-bold text-2xl m-10 sm:m-5 flex flex-row">
            <MenuIcon width={25} className="mr-4" onClick={()=>{ setShowNav(!showNav) }}/>
            Donatio 
          </h1>
          {!props.show ? <DotsHorizontalIcon onClick={props.setShowAsideSm} width={25} className="mr-6 text-primary-900 -mt-2" /> :
          <XIcon onClick={props.setShowAsideSm} width={25} className="mr-6 text-primary-900 -mt-2" />}
        </div>
        <Menu show={showNav} closeMenu={()=>{setShowNav(false)}} />
        </nav>
    )
}

export default Sidebar