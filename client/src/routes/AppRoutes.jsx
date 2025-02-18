import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  )
}