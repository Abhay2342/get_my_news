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
    setSelectedLanguage(event.target.value);
  };

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
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            {/* Add more language options as needed */}
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
          <Button variant="link">Login</Button>
          <Typography variant="h6" color="primary" component="div">
            |
          </Typography>
          <Button variant="link">Signup</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
