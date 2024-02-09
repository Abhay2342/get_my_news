import React, { useState, useRef } from "react";
import { Grid, Typography, IconButton, Paper, Divider } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const itemsPerPage = 5;
const countries = {
  USA: "US",
  Canada: "CA",
  UK: "GB",
  Germany: "DE",
  America: "US", // Assuming "America" refers to the United States
  France: "FR",
  Japan: "JP",
  Australia: "AU",
  India: "IN",
  China: "CN",
  Brazil: "BR",
};
const CountryCarousel = ({ setNewsData }) => {
  const [currentOffset, setCurrentOffset] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const containerRef = useRef(null);

  const totalItems = Object.keys(countries).length;

  const handlePrevPage = () => {
    setCurrentOffset((prevOffset) => Math.max(0, prevOffset - itemsPerPage));
  };

  const handleNextPage = () => {
    setCurrentOffset((prevOffset) =>
      Math.min(totalItems - itemsPerPage, prevOffset + itemsPerPage)
    );
  };

  const handleCountryClick = async (country) => {
    setSelectedCountry(country);
    console.log(country);
    try {
      // setLoading(true);
      console.log("Query Search");
      const response = await fetch(
        `https://get-my-news-server.onrender.com/news/country/${countries[
          country
        ].toLowerCase()}`,
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
  };

  const countryCards = Object.keys(countries).map((country, index) => (
    <Typography
      key={index}
      variant="h4"
      sx={{
        flex: `0 0 ${100 / itemsPerPage}%`,
        fontFamily: "Inika",
        fontWeight: 700,
        fontSize: "1.2rem",
        color: selectedCountry === country ? "#F24E1E" : "#3F3A3B",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      onClick={() => handleCountryClick(country)}
    >
      {country}
    </Typography>
  ));

  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{}}
      >
        <IconButton onClick={handlePrevPage} disabled={currentOffset === 0}>
          <ArrowLeftIcon sx={{ fontSize: "2rem" }} />
        </IconButton>

        <Paper
          ref={containerRef}
          sx={{
            display: "flex",
            textAlign: "center",
            overflow: "hidden",
            boxShadow: "0px 0px 0px 0px",
            width: "70%",
          }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${currentOffset * (100 / totalItems)}%)`,
              cursor: "pointer",
            }}
          >
            {countryCards}
          </div>
        </Paper>

        <IconButton
          onClick={handleNextPage}
          sx={{ fontSize: "2rem" }}
          disabled={currentOffset === totalItems - itemsPerPage}
        >
          <ArrowRightIcon fontSize="2rem" />
        </IconButton>
      </Grid>
      <Divider
        sx={{ borderTopWidth: "1px" }}
        variant="fullWidth"
        color="#3F3A3B"
        flexItem
      />
    </Grid>
  );
};

export default CountryCarousel;
