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
  const [selectedDay, setDay] = useState("01");
  const [selectedMonth, setMonth] = useState("01");
  const [selectedYear, setYear] = useState("2024");
  const [selectedDate, setDate] = useState("2024-01-01");
  const [isSearchBarVisible, setSearchBarVisibility] = useState(false);

  const maxDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleDateSubmit = () => {
    const maxDays = maxDaysInMonth(Number(selectedMonth), Number(selectedYear));
    const isValidDay = Number(selectedDay) <= maxDays;

    if (!isValidDay) {
      alert("Please select the correct date.");
    } else {
      setDate(`${selectedYear}-${selectedMonth}-${selectedDay}`);
      console.log(selectedDate);
    }
    // Add logic for valid date
  };

  const handleSearchClick = () => {
    if (isSearchBarVisible && searchInput != "") {
      console.log(searchInput);
    }
    setSearchBarVisibility(!isSearchBarVisible);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
                value={selectedDay}
                onChange={handleDayChange}
              >
                {[...Array(31)].map((_, index) => (
                  <MenuItem
                    key={index + 1}
                    value={(index + 1).toString().padStart(2, "0")}
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </MenuItem>
                ))}
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
                {monthNames.map((month, index) => (
                  <MenuItem
                    key={index + 1}
                    value={(index + 1).toString().padStart(2, "0")}
                  >
                    {month.toUpperCase()}
                  </MenuItem>
                ))}
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
                {[...Array(10)].map((_, index) => (
                  <MenuItem key={index + 1} value={(2024 - index).toString()}>
                    {(2024 - index).toString()}
                  </MenuItem>
                ))}
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
            {isSearchBarVisible && (
              <InputBase
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                sx={{ marginLeft: 2 }}
              />
            )}
            <SearchIcon
              color="primary"
              onClick={handleSearchClick}
              sx={{ cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalBar;
