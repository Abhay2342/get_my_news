import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

import {
  Button,
  Typography,
  Select,
  MenuItem,
  Grid,
  InputBase,
  AppBar,
  Toolbar,
} from "@mui/material/";

const HorizontalBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedDate, setDate] = useState("01");
  const [selectedMonth, setMonth] = useState("01");
  const [selectedYear, setYear] = useState("2024");

  // Handler for language change
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSearchClick = () => {
    // Implement logic to show/hide search bar
    // You can use the searchInput state to store the user's input
  };

  const handleDateSubmit = () => {
    console.log(selectedDate, selectedMonth, selectedYear);
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", minHeight: "0px" }}
    >
      <Toolbar
        sx={{
          borderBottom: "1px solid #3F3A3B",
          borderTop: "1px solid #3F3A3B",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-around"
        >
          {/* Account icon section */}
          <Grid item xs={3}>
            <AccountCircleIcon color="primary" sx={{ cursor: "pointer" }} />
          </Grid>

          {/* "Filter by Date" section */}
          <Grid
            item
            xs={6}
            alignItems="center"
            container
            justifyContent="center"
          >
            <Grid item>
              <Typography variant="filter" color="primary" sx={{ marginX: 1 }}>
                FILTER BY DATE
              </Typography>
            </Grid>

            <Grid
              item
              sx={{
                paddingLeft: 1,
                borderLeft: 1,
                borderRight: 1,
                borderColor: "primary.main",
              }}
            >
              <Select
                disableUnderline
                label="Date"
                variant="standard"
                sx={{ border: "none" }}
                value={selectedDate}
                onChange={handleDateChange}
              >
                <MenuItem value="01">01</MenuItem>
                <MenuItem value="02">02</MenuItem>
                {/* Add more language options as needed */}
              </Select>
            </Grid>

            <Grid
              item
              sx={{
                paddingLeft: 1,
                borderRight: 1,
                borderColor: "primary.main",
              }}
            >
              <Select
                disableUnderline
                label="Month"
                variant="standard"
                sx={{ border: "none" }}
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                <MenuItem value="01">JANUARY</MenuItem>
                <MenuItem value="02">FEBRUARY</MenuItem>
                {/* Add more language options as needed */}
              </Select>
            </Grid>

            <Grid
              item
              sx={{
                paddingLeft: 1,
                borderRight: 1,
                borderColor: "primary.main",
              }}
            >
              <Select
                disableUnderline
                label="Year"
                variant="standard"
                sx={{ border: "none" }}
                value={selectedYear}
                onChange={handleYearChange}
              >
                <MenuItem value="2024">2024</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                {/* Add more language options as needed */}
              </Select>
            </Grid>

            <Grid item>
              <Button
                onClick={handleDateSubmit}
                variant="contained"
                sx={{
                  marginX: 2,
                  backgroundColor: "#F24E1E",
                  fontFamily: "Inika",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>

          {/* Search bar section */}
          <Grid item xs={3} container justifyContent="flex-end">
            <SearchIcon
              color="primary"
              onClick={handleSearchClick}
              sx={{ cursor: "pointer" }}
            />
            {searchInput && (
              <InputBase
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                sx={{ marginLeft: 2 }}
              />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalBar;
