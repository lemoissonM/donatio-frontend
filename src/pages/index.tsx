import React from "react";
import Sidebar from "@features/ui/layout/sidebar";
import ClientLayout from "@features/ui/layout/clientLayout";
import UserRoutes from "../routes/user.route";
import AuthLayout from "@features/ui/layout/authLayout";
import AuthRoutes from "../routes/auth.route";
import AdminLayout from "@features/ui/layout/adminLayout";
import AdminRoutes from "../routes/admin.route";
import { useUserProfile } from "@features/users/hooks/get-profile.hook";
import { User } from "@features/users/types/user-type";
import { UserContext } from "@features/ui/layout/hooks/user.context";
import { Loading } from "@features/ui/Loader";

const Home: React.FC = () => {
  const authenticated = localStorage.getItem('token');

  if(!authenticated) {
    return (
      <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
        <AuthLayout >
          <AuthRoutes />
        </AuthLayout>
      </div>
    )
  } else {
    const profile = useUserProfile();
    if(profile.data) return(
      <UserContext.Provider value={profile.data || {} as User}>
      <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
        {(authenticated && profile?.data?.role !== "admin") && (
          <ClientLayout>
            <UserRoutes />
          </ClientLayout>
        )}

        {(authenticated && profile?.data?.role === "admin") && (
          <AdminLayout>
            <AdminRoutes />
          </AdminLayout>
        )}
        
      </div>
      </UserContext.Provider>
    ) 
    return <Loading />;
  }
}

export default Home;