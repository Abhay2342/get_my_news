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
  Grid,
  Link,
  Divider,
} from "@mui/material/";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoggedInHeader = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler for login button click
  const handleHomeClick = () => {
    navigate("/"); // Navigate to /login route using useNavigate
  };

  const handleCollectionClick = () => {
    navigate("/"); // Navigate to /login route using useNavigate
  };

  const handleContactUsClick = () => {
    navigate("/contact-us");
  };

  const handleSignOutClick = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
        minHeight: "48px",
      }}
    >
      <Toolbar
        sx={{ minHeight: "48px", justifyContent: "space-between", marginX: 5 }}
      >
        {/* First Column - Language Dropdown */}

        {/* Second Column - Website Title */}
        <Grid item container xs={2}>
          <Grid item>
            <Typography
              variant="h1"
              color="primary"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Get My News
            </Typography>
          </Grid>
        </Grid>

        <Grid item container xs={"auto"}>
          <Grid item>
            <Button variant="link" onClick={handleHomeClick}>
              Home
            </Button>
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2, marginX: 3 }}
            variant="fullWidth"
            color="#3F3A3B"
            flexItem
          />
          <Grid item>
            <Button variant="link" onClick={handleCollectionClick}>
              Collection
            </Button>
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2, marginX: 3 }}
            variant="fullWidth"
            color="#3F3A3B"
            flexItem
          />
          <Grid item>
            <Button variant="link" onClick={handleContactUsClick}>
              Contact Us
            </Button>
          </Grid>
        </Grid>

        {/* Third Column - Login/Signup Buttons with Divider */}
        <Grid item container xs={1} justifyContent={"flex-end"}>
          <Grid item sx={{ lineHeight: 0 }}>
            <Button variant="link" onClick={handleSignOutClick}>
              Sign Out
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider
        sx={{ borderTopWidth: "1px" }}
        variant="fullWidth"
        color="#3F3A3B"
        flexItem
      />
    </AppBar>
  );
};

export default LoggedInHeader;
