import React from "react"
import { UserGroup } from "./types/user-group"

type PropTypes = {
    userGroup: UserGroup
}

const UserGroupItem: React.FC<PropTypes> = (props) => {
    const { userGroup } = props;
    return (
        <div className="flex flex-row bg-primary-200 rounded-[15px] p-3 sm:mb-6">
        <img src={userGroup.imgUrl} className="w-[30px] h-[30px] rounded-[5px]"/>
        <div className="pt-1 flex-grow px-4">
            <h1 className="text-blue text-base font-semibold ">{userGroup.name}</h1>
            <div className="flex flex-row justify-between pt-2">
               <p className="text-primary-900 text-sm font-semibold mt-[10px]">Tot : $140 k</p>
               <p className="text-[#8F8F8F] text-sm font-medium mt-[10px]">20 people</p>
            </div>
            <div className="flex flex-row justify-between">
               <p className="text-secondary-900 bg-secondary-300 w-[100px] rounded-[15px] text-sm pt-[4px] text-center font-semibold mt-[14px]">church</p>
               <button className="bg-primary-900 text-white text-sm h-[30px] w-[70px] mt-[12px] hover:bg-primary-700 rounded-[15px]">View</button>
            </div>
        </div>
     </div> 
    )
}

export default UserGroupItem