import React, { lazy, Suspense } from 'react';
import { useUserProfile } from '@features/users/hooks/get-profile.hook';
import { User } from '@features/users/types/user-type';
import { UserContext } from '@features/ui/layout/hooks/user.context';
import { ToastContainer } from 'react-toastify';
import AdminRoutes from '../routes/admin.route';
import AuthRoutes from '../routes/auth.route';
import UserRoutes from '../routes/user.route';
import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '@features/ui/Loader';

const ClientLayout = lazy(() => import('@features/ui/layout/clientLayout'));
const AuthLayout = lazy(() => import('@features/ui/layout/authLayout'));
const AdminLayout = lazy(() => import('@features/ui/layout/adminLayout'));
const ChooseView = lazy(() => import('./choose-view'));

const Home: React.FC = () => {
  const authenticated = localStorage.getItem('token');
  const [visibleView, setVisibleView] = React.useState('');
  const profile = useUserProfile(authenticated ? true : false);
  const realVisibleView =
    profile?.data?.role === 'admin' || profile?.data?.groups.length ? 'multiple' : 'single';

  return (
    <Suspense fallback={<Loading />}>
      <>
        {!authenticated ? (
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
        ) : (
          <UserContext.Provider
            value={{ ...(profile.data || ({} as User)), visibleView: visibleView, setVisibleView }}
          >
            {!visibleView && realVisibleView === 'multiple' && <ChooseView />}
            {(visibleView || realVisibleView === 'single') && (
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
                {authenticated && (visibleView === 'user' || realVisibleView === 'single') && (
                  <ClientLayout>
                    <UserRoutes />
                  </ClientLayout>
                )}

                {authenticated && (visibleView === 'admin' || visibleView.includes('group')) && (
                  <AdminLayout>
                    <AdminRoutes />
                  </AdminLayout>
                )}
              </div>
            )}
          </UserContext.Provider>
        )}
      </>
    </Suspense>
  );
};

export default Home;
