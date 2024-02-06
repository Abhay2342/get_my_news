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
    
    Global Shocks: Events with global repercussions, such as the COVID-19 pandemic, can significantly impact economies worldwide. Supply chain disruptions, travel restrictions, and lockdowns have led to a decline in production and consumption.
    
    Financial Instabilities: A collapse in financial markets, triggered by factors like excessive speculation, over-leveraging, or banking system failures, can contribute to an economic downturn.
    
    Political and Geopolitical Uncertainties: Political instability and geopolitical tensions can create an environment of uncertainty, deterring investments and affecting economic growth.
    
    Trade Imbalances: Persistent trade deficits or surpluses can strain a country's economic health, affecting currency values and trade relationships.
    
    Implications of the Economic Crisis:
    The repercussions of an economic crisis are far-reaching and can impact various aspects of society:
    
    Unemployment: High unemployment rates are a common consequence of economic downturns, leading to increased financial hardships for individuals and families.
    
    Poverty and Inequality: Economic crises often exacerbate existing inequalities, pushing vulnerable populations further into poverty.
    
    Business Failures: Many businesses, particularly small enterprises, may struggle to survive during economic crises, leading to closures and job losses.
    
    Government Interventions: Governments may need to implement stimulus packages and interventions to stabilize the economy, leading to increased public debt.
    
    Strategies for Recovery:
    Addressing an economic crisis requires a comprehensive and multi-faceted approach:
    
    Fiscal Policies: Governments can implement fiscal policies, such as tax cuts and increased government spending, to stimulate demand and support economic recovery.
    
    Monetary Policies: Central banks can adjust interest rates and implement monetary policies to control inflation, encourage borrowing, and stabilize financial markets.
    
    Structural Reforms: Structural reforms in areas like labor markets, education, and healthcare can enhance a country's long-term economic resilience.
    
    International Cooperation: Collaborative efforts between nations can contribute to global economic stability. Coordinated policies and trade agreements can facilitate recovery on a broader scale.
    
    Innovation and Technology: Embracing innovation and technology can drive productivity and create new economic opportunities, fostering long-term growth.
    
    Conclusion:
    While navigating an economic crisis is undoubtedly challenging, it also presents an opportunity for introspection and reform. Governments, businesses, and individuals must work together to implement strategic measures that promote resilience, inclusivity, and sustainable economic growth. By learning from past crises and adopting proactive strategies, nations can not only recover from the current economic challenges but also build a more robust and adaptive economic framework for the future.`,
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

const Body = ({ newsData }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  if (newsData === null) {
    newsData = newsArticles;
  }
  const handleCategoryClick = (item) => {
    console.log(item);
    setSelectedItem(item);
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
        <SelectedArticle selectedArticle={selectedArticle} />
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
