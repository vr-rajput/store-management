import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login';
import { Register } from '../pages/register';
import { AuthLayout } from '../layouts/AuthLayout';

export const AppRoutes = ({ handleLoginClick }) => {
  return (

    <AuthLayout>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </AuthLayout>

  )
}