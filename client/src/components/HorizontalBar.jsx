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
  Divider,
  CircularProgress,
} from "@mui/material/";
import { useNavigate } from "react-router-dom";
const HorizontalBar = ({ isLoggedIn, setNewsData, userData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedDay, setDay] = useState("01");
  const [selectedMonth, setMonth] = useState("01");
  const [selectedYear, setYear] = useState("2024");
  const [selectedDate, setDate] = useState("2024-01-01");
  const [isSearchBarVisible, setSearchBarVisibility] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading spinner
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler for login button click
  const handleAccountClick = () => {
    const loginStatus = isLoggedIn;
    console.log(loginStatus);
    if (!loginStatus) {
      // If not signed in, navigate to the login route
      navigate("/login");
    } else {
      // If signed in, navigate to the profile settings page
      navigate("/profile-settings");
    }
  };

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

  const handleDateSubmit = async () => {
    setLoading(true); // Show loading spinner
    const maxDays = maxDaysInMonth(Number(selectedMonth), Number(selectedYear));
    const isValidDay = Number(selectedDay) <= maxDays;

    if (!isValidDay) {
      alert("Please select the correct date.");
      setLoading(false); // Hide loading spinner
    } else {
      setDate(`${selectedYear}-${selectedMonth}-${selectedDay}`);

      console.log(selectedDay, selectedMonth, selectedYear);

      try {
        const response = await fetch(
          "https://get-my-news-server.onrender.com/news/date",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              day: selectedDay,
              month: selectedMonth,
              year: selectedYear,
              apiKey: userData.apikey,
            }),
          }
        );

        if (response.ok) {
          const newsData = await response.json();

          setNewsData(newsData);
          console.log(newsData);
        } else {
          console.error("News Failed");
        }
      } catch (error) {
        console.error("Error during News:", error);
      } finally {
        setLoading(false); // Hide loading spinner
      }
    }
  };

  const handleSearchClick = async () => {
    if (isSearchBarVisible && searchInput != "") {
      console.log(searchInput);

      try {
        // setLoading(true);
        console.log("Query Search");
        const response = await fetch(
          `https://get-my-news-server.onrender.com/news/text/${searchInput}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const newsData = await response.json();

          // Update user context with email and other user data
          // loginUser(userData);
          setNewsData(newsData);
          console.log(newsData);
          // console.log(JSON.stringify(userData));
          // localStorage.setItem("user", JSON.stringify(userData));
          // localStorage.setItem("isLoggedIn", "true");

          // setLoading(false);
          // navigate("/profile-settings");
        } else {
          console.error("News Failed");
          // setLoading(false);
        }
      } catch (error) {
        console.error("Error during News:", error);
        // setLoading(false);
      }
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
      <Divider
        sx={{ borderTopWidth: "1px" }}
        variant="fullWidth"
        color="#3F3A3B"
        flexItem
      />
      <Grid
        container
        height={"100%"}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Account icon section */}
        <Grid item container xs={"auto"}>
          <Grid item marginX={3} sx={{ lineHeight: 0 }}>
            <AccountCircleIcon
              onClick={handleAccountClick}
              color="primary"
              sx={{ cursor: "pointer", fontSize: "28px" }}
            />
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2 }}
            variant="fullWidth"
            color="#3F3A3B"
            flexItem
          />
        </Grid>

        {/* "Filter by Date" section */}
        <Grid
          item
          xs={9}
          alignItems="center"
          container
          justifyContent="center"
          height={"100%"}
        >
          <Grid item>
            <Typography variant="filter" color="primary">
              FILTER BY DATE
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2, marginX: 3 }}
            variant="fullWidth"
            color="#3F3A3B"
            flexItem
          />
          {/* Add loading spinner and text */}
          {loading ? (
            <Grid item>
              <CircularProgress size={20} />
              <Typography variant="filter" alignSelf={"center"} paddingLeft={2}>
                Please wait...
              </Typography>
            </Grid>
          ) : (
            <>
              <Grid item>
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

              <Divider
                orientation="vertical"
                sx={{ borderRightWidth: 2, marginX: 2 }}
                variant="fullWidth"
                color="#3F3A3B"
                flexItem
              />

              <Grid item>
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
                      {month.toUpperCase().padStart(2, "0")}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Divider
                orientation="vertical"
                sx={{ borderRightWidth: 2, marginX: 2 }}
                variant="fullWidth"
                color="#3F3A3B"
                flexItem
              />

              <Grid item>
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
            </>
          )}

          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2, marginLeft: 2 }}
            variant="fullWidth"
            color="#3F3A3B"
            flexItem
          />

          <Grid item>
            <Button
              onClick={handleDateSubmit}
              variant="contained"
              sx={{
                backgroundColor: "#F24E1E",
                fontFamily: "Inika",
                borderRadius: "0px",
              }}
            >
              Submit
            </Button>
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2 }}
            variant="fullWidth"
            color="#3F3A3B"
            flexItem
          />
        </Grid>

        {/* Search bar section */}
        <Grid
          item
          xs={"auto"}
          container
          justifyContent="flex-end"
          alignContent={"center"}
        >
          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2 }}
            variant="fullWidth"
            color="#3F3A3B"
            flexItem
          />
          <Grid item marginX={3} sx={{ lineHeight: 0 }}>
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
              sx={{ cursor: "pointer", fontSize: "28px" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Divider
        sx={{ borderTopWidth: "1px" }}
        variant="fullWidth"
        color="#3F3A3B"
        flexItem
      />
    </AppBar>
  );
};

export default HorizontalBar;
