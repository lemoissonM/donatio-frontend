import React from 'react';
import Login from '@pages/auth/login';
import Signup from '@pages/auth/signup';
import { Route, Routes, Navigate } from 'react-router-dom';
import RequestResetPassword from '@pages/auth/resetRequest';
import ResetPassword from '@pages/auth/passwor-reset';
import Verify from '@pages/auth/verify';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/password-reset" element={<ResetPassword />} />
      <Route path="/request-password-reset" element={<RequestResetPassword />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AuthRoutes;
