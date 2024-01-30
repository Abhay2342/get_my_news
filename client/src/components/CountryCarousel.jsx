import React, { useState, useRef } from "react";
import { Grid, Typography, IconButton, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const itemsPerPage = 5;

const CountryCarousel = ({}) => {
  const countries = [
    "USA",
    "Canada",
    "UK",
    "Germany",
    "America",
    "New York",
    "France",
    "Japan",
    "Australia",
    "India",
    "China",
    "Brazil",
    "London",
  ];

  const [currentOffset, setCurrentOffset] = useState(0);
  const containerRef = useRef(null);

  const totalItems = countries.length;

  const handlePrevPage = () => {
    setCurrentOffset((prevOffset) => Math.max(0, prevOffset - itemsPerPage));
  };

  const handleNextPage = () => {
    setCurrentOffset((prevOffset) =>
      Math.min(totalItems - itemsPerPage, prevOffset + itemsPerPage)
    );
  };

  const countryCards = countries.map((country, index) => (
    <Typography
      key={index}
      variant="h4"
      sx={{
        flex: `0 0 ${100 / itemsPerPage}%`,
        fontFamily: "Inika",
        fontWeight: 700,
        fontSize: "1.2rem",
        color: "#3F3A3B",
      }}
    >
      {country}
    </Typography>
  ));

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ borderBottom: "1px solid #3F3A3B" }}
    >
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{}}
      >
        <IconButton onClick={handlePrevPage} disabled={currentOffset === 0}>
          <ArrowBackIcon />
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
            }}
          >
            {countryCards}
          </div>
        </Paper>

        <IconButton
          onClick={handleNextPage}
          disabled={currentOffset === totalItems - itemsPerPage}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CountryCarousel;
