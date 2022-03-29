import React from 'react';
import ClientLayout from '@features/ui/layout/clientLayout';
import AuthLayout from '@features/ui/layout/authLayout';
import AdminLayout from '@features/ui/layout/adminLayout';
import { useUserProfile } from '@features/users/hooks/get-profile.hook';
import { User } from '@features/users/types/user-type';
import { UserContext } from '@features/ui/layout/hooks/user.context';
import { Loading } from '@features/ui/Loader';
import { ToastContainer } from 'react-toastify';
import AdminRoutes from '../routes/admin.route';
import AuthRoutes from '../routes/auth.route';
import UserRoutes from '../routes/user.route';
import 'react-toastify/dist/ReactToastify.css';

const Home: React.FC = () => {
  const authenticated = localStorage.getItem('token');

  if (!authenticated) {
    return (
      <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <AuthLayout>
          <AuthRoutes />
        </AuthLayout>
      </div>
    );
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const profile = useUserProfile();

  if (profile.data) {
    return (
      <UserContext.Provider value={profile.data || ({} as User)}>
        <div className="w-full h-screen	flex justify-between flex-row sm:flex-col">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {authenticated && profile?.data?.role !== 'admin' && (
            <ClientLayout>
              <UserRoutes />
            </ClientLayout>
          )}

          {authenticated && profile?.data?.role === 'admin' && (
            <AdminLayout>
              <AdminRoutes />
            </AdminLayout>
          )}
        </div>
      </UserContext.Provider>
    );
  }
  return <Loading />;
};

export default Home;
