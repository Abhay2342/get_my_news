// src/components/Header.jsx

import React, { useState } from "react";

import {
  Select,
  Typography,
  Box,
  Button,
  MenuItem,
  AppBar,
  Toolbar,
} from "@mui/material/";

import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = ({ isLoggedIn, onSignOut }) => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Handler for login button click
  const handleLoginClick = () => {
    navigate("/login"); // Navigate to /login route using useNavigate
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleSignOutClick = () => {
    // Perform sign-out logic
    // For example, update local storage, reset state, etc.
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("userCollection");
    onSignOut();
  };

  // Handler for language change
  const handleLanguageChange = (event) => {
    console.log(event.target.value);
    setSelectedLanguage(event.target.value);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "pt", label: "Português" },
    { code: "ru", label: "Русский" },
    { code: "zh", label: "中文" },
    { code: "ja", label: "日本語" },
    { code: "ko", label: "한국어" },
    { code: "ar", label: "العربية" },
    { code: "hi", label: "हिन्दी" },
    { code: "tr", label: "Türkçe" },
    { code: "nl", label: "Nederlands" },
    { code: "sv", label: "Svenska" },
    // Add more languages as needed
  ];

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", minHeight: "48px" }}
    >
      <Toolbar sx={{ minHeight: "48px" }}>
        {/* First Column - Language Dropdown */}
        <Box>
          <Select
            label="Language"
            variant="standard"
            sx={{ border: "none", margin: "6px 16px" }}
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            {languages.map((lang) => (
              <MenuItem key={lang.code} value={lang.code}>
                {lang.label}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Second Column - Website Title */}
        <Typography
          variant="h1"
          color="primary"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Get My News
        </Typography>

        {/* Third Column - Login/Signup Buttons with Divider */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isLoggedIn ? (
            // Show sign-out button when logged in
            <>
              <Button variant="link" onClick={handleSignOutClick}>
                Sign Out
              </Button>
            </>
          ) : (
            // Show login/signup buttons when not logged in
            <>
              <Button variant="link" onClick={handleLoginClick}>
                Login
              </Button>
              <Typography variant="h6" color="primary" component="div">
                |
              </Typography>
              <Button variant="link" onClick={handleSignUpClick}>
                SignUp
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
