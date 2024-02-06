import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Navigation from "./components/Navigation";
import SignUpPage from "./pages/signup/SignUpPage";
import LoginPage from "./pages/login/LoginPage";
import {
  // AccountSettingsPage,
  SettingsPage,
} from "./pages/settings/SettingsPage";
import "./App.css";
import ContactUs from "./pages/contact_us/ContactUs";
function App() {
  return (
    <Router>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/profile-settings"
          element={<SettingsPage path={"PROFILE"} />}
        />
        <Route
          path="/account-settings"
          element={<SettingsPage path={"ACCOUNT"} />}
        />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
