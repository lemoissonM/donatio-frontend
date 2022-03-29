import React from 'react';
import Login from '@pages/auth/login';
import Signup from '@pages/auth/signup';
import { Route, Routes, Navigate } from 'react-router-dom';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AuthRoutes;
