import DonationList from "@features/donations/list"
import NeedList from "@features/needs/list"
import SavedNeedList from "@features/needs/saved-list"
import UserGroupList from "@features/user-groups/list"
import Profile from "@features/users/profile"
import { Route, Routes} from "react-router-dom"
import UserRoutes from "./user.route"


const RouteList = () => {
    const token = localStorage.getItem('token')
    const isAdmin = false;
    if(token && isAdmin) {
        return <UserRoutes />
    }
}

export default RouteList