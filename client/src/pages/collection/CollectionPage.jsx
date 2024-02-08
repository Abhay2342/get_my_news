import React, { useState, useEffect } from "react";

import LoggedInHeader from "../../components/LoggedInHeader";
import { Grid, Divider, Typography, TextField, Button } from "@mui/material";
import NewsArticleList from "../../components/NewsArticleList";
import SelectedArticle from "../../components/SelectedArticle";
import img1 from "../../assets/article1.png";
import img2 from "../../assets/article2.png";
import img3 from "../../assets/article3.png";
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
    {
      image: img3,
      title: "SUDDEN RISE IN CYBER CRIME",
      publish_date: "19-02-2020",
      text: "The surge in cybercrime demands heightened security and increased public awareness to combat unauth access, data breaches, and online fraud.",
    },
    {
      image: img3,
      title: "SUDDEN RISE IN CYBER CRIME",
      publish_date: "19-02-2020",
      text: "The surge in cybercrime demands heightened security and increased public awareness to combat unauth access, data breaches, and online fraud.",
    },
  ],
};

const CollectionPage = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    console.log(article);
    setSelectedArticle(article);
  };

  useEffect(() => {
    // Set the default selected item to the first item
    // setSelectedItem("All");
    // Set the default selected article to the first article
    setSelectedArticle(newsArticles.news[0]);
  }, []);

  return (
    <div>
      <LoggedInHeader />
      <Grid container justifyContent={"space-around"}>
        <Grid item xs={3}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "700",
              fontFamily: "Inika",
            }}
            paddingY={1}
          >
            Articles List
          </Typography>
          <NewsArticleList
            newsArticles={newsArticles.news}
            handleArticleClick={handleArticleClick}
            selectedArticle={selectedArticle}
          />
        </Grid>

        <Divider
          orientation="vertical"
          sx={{ borderRightWidth: 2, marginLeft: 2 }}
          variant="fullWidth"
          color="#3F3A3B"
          flexItem
        />

        <Grid item xs={5}>
          <SelectedArticle
            selectedArticle={selectedArticle}
            // isLoggedIn={isLoggedIn}
            ContentHeight={"90vh"}
          />
        </Grid>

        <Divider
          orientation="vertical"
          sx={{ borderRightWidth: 2, marginLeft: 2 }}
          variant="fullWidth"
          color="#3F3A3B"
          flexItem
        />

        <Grid item xs={3}>
          <form action="">
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: "700",
                fontFamily: "Inika",
              }}
              paddingY={1}
            >
              Take Notes
            </Typography>
            <TextField
              sx={{
                // background: "#FFFFFF",
                margin: "0px 0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
              }}
              name="desc"
              fullWidth
              label=""
              variant="outlined"
              multiline
              margin="normal"
              type="text"
              rows={22}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{
                backgroundColor: "#F24E1E",
                fontFamily: "Inika",
                borderRadius: "0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
                borderColor: "black",
                marginY: "14px",
              }}
            >
              SUBMIT
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default CollectionPage;
