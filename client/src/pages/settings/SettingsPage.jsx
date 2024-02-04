import React from "react";
import LoggedInHeader from "../../components/LoggedInHeader";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import { Grid, Divider, Typography, IconButton } from "@mui/material";
import SettingsList from "../../components/SettingsList";
import { useState, useEffect } from "react";
import ProfileSettingsBody from "../../components/SettingsPage/ProfileSettingsBody";
import SouthIcon from "@mui/icons-material/South";
import AccountSettingsBody from "../../components/SettingsPage/AccountSettingsBody";
import { useNavigate } from "react-router-dom";
import coming_soon from "../../assets/coming_soon.png";
const SettingsPage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryClick = (item) => {
    console.log(item);
    setSelectedItem(item);

    // Change the URL based on the selected item
    if (item === "ACCOUNT") {
      navigate("/account-settings");
    } else {
      // If not "ACCOUNT", navigate to the default profile settings URL
      navigate("/profile-settings");
    }
  };

  useEffect(() => {
    // Set the default selected item to the first item
    setSelectedItem("PROFILE");
    if (selectedItem === "ACCOUNT") {
      navigate("/account-settings");
    } else {
      // If not "ACCOUNT", navigate to the default profile settings URL
      navigate("/profile-settings");
    }
  }, []);

  const renderSettingsBody = () => {
    if (selectedItem === "PROFILE") {
      return <ProfileSettingsBody />;
    } else if (selectedItem === "ACCOUNT") {
      return <AccountSettingsBody />;
    } else {
      // Render an image or any other content when no match is found
      return (
        <img
          src={coming_soon} // Replace with the path to your image
          alt="Default Image"
          style={{ width: "100%", height: "80vh" }}
        />
      );
    }

    // Add more conditions for other items if needed
    return null;
  };

  return (
    <div>
      <LoggedInHeader />
      <Grid container>
        <Grid item container xs={11} paddingLeft={"8rem"}>
          <Grid item container>
            <Grid item container alignContent={"center"} xs={12}>
              <BasicBreadcrumbs />
            </Grid>

            <Grid item container>
              <Grid item xs={1}>
                <SettingsList
                  selectedItem={selectedItem}
                  handleCategoryClick={handleCategoryClick}
                />
              </Grid>
              <Divider
                orientation="vertical"
                sx={{ borderRightWidth: 2, marginX: 5 }}
                variant="fullWidth"
                color="#3F3A3B"
                flexItem
              />

              <Grid item xs={10} paddingX={"50px"} justifyContent={"center"}>
                {renderSettingsBody()}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={1} justifyContent="center">
          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2, marginX: 2 }}
            variant="fullWidth"
            color="#3F3A3B"
            flexItem
          />
          <div
            style={{
              position: "relative",
              height: "92vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {/* Typography for "Scroll Down" */}
            <Typography
              variant="caption"
              style={{
                fontFamily: "Lalezar",
                fontWeight: 400,
                color: "#3F3A3B",
                writingMode: "vertical-lr",
                textOrientation: "mixed",
                marginBottom: "16px",
              }}
            >
              SCROLL DOWN
            </Typography>

            {/* South Icon */}
            <IconButton variant="scroll" style={{ marginBottom: "16px" }}>
              {/* Assuming 'SouthIcon' is the name of the icon component you want to use */}
              {/* Replace it with the appropriate MUI icon component */}
              {/* For example, you can use ArrowDownwardIcon */}
              <SouthIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export { SettingsPage };
