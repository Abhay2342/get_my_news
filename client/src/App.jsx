import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import Navigation from './components/Navigation';
import SignUpPage from './pages/signup/SignUpPage';
import LoginPage from './pages/login/LoginPage';
import {AccountSettingsPage, ProfileSettingsPage} from "./pages/settings/Settings"
import './App.css'

function App() {

  return (
    <Router>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile-settings" element={<ProfileSettingsPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  )
}

export default App
