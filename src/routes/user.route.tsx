import React from 'react';
import Profile from '@features/users/profile';
import DonationListPage from '@pages/donations';
import DonationDetailPage from '@pages/donations/detail';
import NeedDetailPage from '@pages/needs/detail';
import NeedListPage from '@pages/needs/list';
import SavedNeedListPage from '@pages/needs/saved';
import UserGroupListPage from '@pages/user-groups/list';
import { Route, Routes, Navigate } from 'react-router-dom';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NeedListPage isAdmin={false} />} />
      <Route path="/needs/saved" element={<SavedNeedListPage />} />
      <Route path="/needs/detail/:id" element={<NeedDetailPage />} />
      <Route path="/donations/detail/:id" element={<DonationDetailPage />} />
      <Route path="/donations/me" element={<DonationListPage />} />
      <Route path="/groups/me" element={<UserGroupListPage />} />
      <Route path="/settings" element={<Profile />} />
      <Route element={<Navigate to="/" />} />
    </Routes>
  );
};

export default UserRoutes;
