import Profile from "@features/users/profile"
import DashboardPage from "@pages/admin/dashboard"
import DonationListPage from "@pages/donations"
import DonationDetailPage from "@pages/donations/detail"
import NeedDetailPage from "@pages/needs/detail"
import NeedListPage from "@pages/needs/list"
import UserGroupListPage from "@pages/user-groups/list"
import { Route, Routes, Navigate } from "react-router-dom"

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/"  element={<DashboardPage />} />
            <Route path="/needs" element={<NeedListPage isAdmin={true} />} />
            <Route path="/needs/detail/:id" element={<NeedDetailPage />} />
            <Route path="/donations/detail/:id" element={<DonationDetailPage />} />
            <Route path="/donations" element = {<DonationListPage />} />
            <Route path="/groups" element={<UserGroupListPage />} />
            <Route path="/settings" element={<Profile />} />
            <Route element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AdminRoutes