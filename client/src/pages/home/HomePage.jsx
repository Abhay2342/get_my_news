// src/pages/HomePage.jsx

import React from "react";
import Header from "../../components/Header";
import HorizontalBar from "../../components/HorizontalBar";
import Body from "../../components/Body";
import CountryCarousel from "../../components/CountryCarousel";

const HomePage = () => {
  return (
    <div>
      {/* Include the Header component */}
      <Header />
      <HorizontalBar />
      <CountryCarousel />
      <Body />

      {/* Rest of your homepage content */}
      {/* <h1>Welcome to Your Website!</h1> */}
      {/* Add more content as needed */}
    </div>
  );
};

export default HomePage;
