import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="bg-[url('./assets/chat-app-assets/bgImage.svg')] bg-contain">
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Default route for the home page */}
        <Route path="/login" element={<LoginPage />} /> {/* Route for the login page */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Route for the profile page */}
      </Routes>
    </div>
  )
}

export default App