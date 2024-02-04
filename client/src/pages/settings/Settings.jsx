import React from "react";
import LoggedInHeader from "../../components/LoggedInHeader";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import { Grid, Divider, Typography, IconButton } from "@mui/material";
import SettingsList from "../../components/SettingsList";
import { useState, useEffect } from "react";
import ProfileSettingsBody from "../../components/ProfileSettingsBody";
import SouthIcon from "@mui/icons-material/South";

const ProfileSettingsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleCategoryClick = (item) => {
    console.log(item);
    setSelectedItem(item);
    // Reset selected article when a new category is clicked
  };
  useEffect(() => {
    // Set the default selected item to the first item
    setSelectedItem("PROFILE");
    // Set the default selected article to the first article
  }, []);

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
                variant="middle"
                color="#3F3A3B"
                flexItem
              />

              <Grid item xs={10} paddingX={"50px"} justifyContent={"center"}>
                <ProfileSettingsBody />
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

const AccountSettingsPage = () => {
  return (
    <div>
      <LoggedInHeader />
    </div>
  );
};

export { ProfileSettingsPage, AccountSettingsPage };
