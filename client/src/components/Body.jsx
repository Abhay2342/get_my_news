import React, { useState, useEffect } from "react";
import { Grid, IconButton, Typography, Divider } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import CategoryList from "./CategoryList";
import NewsArticleList from "./NewsArticleList";
import SelectedArticle from "./SelectedArticle";

import img1 from "../assets/article1.png";
import img2 from "../assets/article2.png";
import img3 from "../assets/article3.png";

const newsArticles = {
  news: [
    {
      image: img1,
      title: "ECONOMIC CRISIS ON PEAK",
      publish_date: "24-05-2023",
      text: `In recent times, the world has witnessed an alarming surge in economic crises, pushing nations to the brink of financial instability. The term "economic crisis" refers to a severe and sustained downturn in the economic performance of a country, characterized by a contraction in economic activity, rising unemployment rates, and financial distress across various sectors. This article delves into the factors contributing to the current economic crisis, its widespread implications, and potential strategies for recovery.

    Causes of the Economic Crisis:
    Several factors can contribute to the escalation of an economic crisis. These may include:
    
 `,
    },
    {
      image: img2,
      title: "BLACK LIFE UNTOLD STORIES",
      publish_date: "19-02-2020",
      text: "Black Lives Matter is a movement advocating for the rights and equality of Black individuals, challenging systemic racism and injustice.",
    },
    {
      image: img3,
      title: "SUDDEN RISE IN CYBER CRIME",
      publish_date: "19-02-2020",
      text: "The surge in cybercrime demands heightened security and increased public awareness to combat unauth access, data breaches, and online fraud.",
    },
  ],
};

const Body = ({ newsData, setNewsData, isLoggedIn }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  if (newsData === null) {
    newsData = newsArticles;
  }
  const handleCategoryClick = async (item) => {
    console.log(item);
    setSelectedItem(item);

    try {
      // setLoading(true);
      console.log("Category Search");
      const response = await fetch(
        `https://get-my-news-server.onrender.com/news/category/${selectedItem}`,
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
    // Reset selected article when a new category is clicked
    setSelectedArticle(newsData.news[0]);
  };

  const handleArticleClick = (article) => {
    console.log(article);
    setSelectedArticle(article);
  };

  useEffect(() => {
    // Set the default selected item to the first item
    setSelectedItem("All");
    // Set the default selected article to the first article
    setSelectedArticle(newsData.news[0]);
  }, []);

  return (
    <Grid
      container
      margin={"0px"}
      padding={"0px"}
      justifyContent={"center"}
      width={"100%"}
      // height="100%"
    >
      <Grid item xs={2} justifyContent="center">
        <CategoryList
          newsData={newsData}
          selectedItem={selectedItem}
          handleCategoryClick={handleCategoryClick}
        />
      </Grid>
      <Divider
        orientation="vertical"
        sx={{ borderRightWidth: 2, marginLeft: 2 }}
        variant="fullWidth"
        color="#3F3A3B"
        flexItem
      />
      <Grid item xs={3} justifyContent="center">
        <NewsArticleList
          newsArticles={newsData.news}
          handleArticleClick={handleArticleClick}
          selectedArticle={selectedArticle}
        />
      </Grid>
      <Divider
        orientation="vertical"
        sx={{ borderRightWidth: 2, marginRight: 2 }}
        variant="fullWidth"
        color="#3F3A3B"
        flexItem
      />
      <Grid item xs={6} justifyContent="center">
        <SelectedArticle
          selectedArticle={selectedArticle}
          isLoggedIn={isLoggedIn}
          ContentHeight={"80vh"}
        />
      </Grid>
      <Divider
        orientation="vertical"
        sx={{ borderRightWidth: 2, marginX: 2 }}
        variant="fullWidth"
        color="#3F3A3B"
        flexItem
      />
      <Grid item xs={"auto"} justifyContent="center">
        <div
          style={{
            position: "relative",
            height: "80vh",
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
  );
};

export default Body;
