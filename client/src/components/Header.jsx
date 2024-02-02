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

const Header = () => {
  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("en");

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
          <Button href="/login" variant="link">
            Login
          </Button>

          <Typography variant="h6" color="primary" component="div">
            |
          </Typography>
          <Button href="/signup" variant="link">
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
