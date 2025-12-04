import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/Auth/LoginPage'
import SignupPage from './pages/Auth/SignupPage'
import VerifierPortal from './pages/VerifierPortal'
import StudentPortal from './pages/StudentPortal'
import UniversityPortal from './pages/UniversityPortal'
import HecPortalPage from './pages/HecPortalPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verifier-portal" element={<VerifierPortal />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/university-portal" element={<UniversityPortal />} />
        <Route path="/hec-portal" element={<HecPortalPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
