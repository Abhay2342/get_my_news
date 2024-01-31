import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";
import { Grid, Paper, Divider, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import img1 from "../assets/article1.png";
import img2 from "../assets/article2.png";
import img3 from "../assets/article3.png";
import SouthIcon from "@mui/icons-material/South";
const newsArticles = [
  {
    image: img1,
    heading: "ECONOMIC CRISIS ON PEAK",
    date: "24-05-2023",
    description: `In recent times, the world has witnessed an alarming surge in economic crises, pushing nations to the brink of financial instability. The term "economic crisis" refers to a severe and sustained downturn in the economic performance of a country, characterized by a contraction in economic activity, rising unemployment rates, and financial distress across various sectors. This article delves into the factors contributing to the current economic crisis, its widespread implications, and potential strategies for recovery.

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
    heading: "BLACK LIFE UNTOLD STORIES",
    date: "19-02-2020",
    description:
      "Black Lives Matter is a movement advocating for the rights and equality of Black individuals, challenging systemic racism and injustice.",
  },
  {
    image: img3,
    heading: "SUDDEN RISE IN CYBER CRIME",
    date: "19-02-2020",
    description:
      "The surge in cybercrime demands heightened security and increased public awareness to combat unauth access, data breaches, and online fraud.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    heading: "Top Heading for Article 4",
    date: "20-05-2022",
    description: "Small Description for Article 4",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    heading: "Top Heading for Article 5",
    date: "Date for Article 5",
    description: "Small Description for Article 5",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    heading: "Top Heading for Article 6",
    date: "Date for Article 6",
    description: "Small Description for Article 6",
  },
  // Add 6 more articles
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    heading: "Top Heading for Article 7",
    date: "Date for Article 7",
    description: "Small Description for Article 7",
  },
];

const Body = () => {
  const [selectedItem, setSelectedCategory] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(newsArticles[0]);

  const handleCategoryClick = (item) => {
    setSelectedCategory(item);
    // setSelectedArticle(article);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  useEffect(() => {
    // Set the default selected item to the first item
    setSelectedCategory("All");
    // Set the default selected article to the first article
    setSelectedArticle(newsArticles[0]);
  }, []);

  const renderListItems = () => {
    const items = [
      "All",
      "LATEST NEWS",
      "OPINION",
      "SPORTS",
      "LIFE STYLE",
      "HEALTH",
      "SHOWBIZZ",
      "SCIENCE",
      "TECHNOLOGY",
      "TALK SHOW",
      "EDUCATION",
      "RELIGION",
    ];

    return items.map((item) => (
      <ListItem key={item} onClick={() => handleCategoryClick(item)}>
        <ListItemButton
          sx={{
            lineHeight: "0px",
            fontFamily: "Inika",
            fontWeight: 700,
            fontSize: "1rem",
            color: selectedItem === item ? "#F24E1E" : "#3F3A3B",
            padding: "5px 10px",
          }}
        >
          {item}
        </ListItemButton>
        {selectedItem === item && (
          <Badge
            color="error"
            variant="dot"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          />
        )}
      </ListItem>
    ));
  };

  const renderNewsArticles = () => {
    return newsArticles.map((article, index) => (
      <React.Fragment key={index}>
        <ListItem
          key={article}
          sx={{ alignItems: "flex-start", cursor: "pointer" }}
          onClick={() => handleArticleClick(article)}
        >
          {/* Article Image */}
          <img
            src={article.image}
            alt={`Article ${index + 1}`}
            style={{ width: "158px", height: "118px", marginRight: "10px" }}
          />

          {/* Article Details */}
          <div>
            {/* Top Heading */}
            <div
              style={{
                fontFamily: "Inika",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: selectedArticle === article ? "#F24E1E" : "#3F3A3B",
              }}
            >
              {article.heading}
            </div>

            {/* Date */}
            <div
              style={{
                fontFamily: "Lalezar",
                fontWeight: 400,
                fontSize: "0.6rem",
                color: "#3F3A3B",
                marginBottom: "3px",
              }}
            >
              {article.date}
            </div>

            {/* Truncated Description */}
            <div
              style={{
                fontFamily: "Inika",
                fontWeight: 400,
                fontSize: "0.7rem",
                color: "#000",
                lineHeight: "10px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 4, // Adjust the number of lines you want to display
                WebkitBoxOrient: "vertical",
              }}
            >
              {article.description}
            </div>
          </div>
        </ListItem>
        {index < newsArticles.length - 1 && (
          <Divider
            variant="middle"
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              color: "#3F3A3B",
              borderBottomWidth: 1,
            }}
          />
        )}
      </React.Fragment>
    ));
  };

  const renderSelectedArticle = () => {
    if (!selectedArticle) {
      return null;
    }
    return (
      <div
        style={{
          padding: "20px",
          height: "80vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Article Image */}
        <img
          src={selectedArticle.image}
          alt={selectedArticle.heading}
          style={{
            width: "100%",
            height: "218px",
            objectFit: "cover",
          }}
        />

        {/* Article Details */}
        <div style={{ cwidth: "100%" }}>
          {/* Date and Heart Icon */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Date */}
            <Typography
              variant="subtitle2"
              style={{
                fontFamily: "Lalezar",
                fontWeight: 400,
              }}
            >
              {selectedArticle.date}
            </Typography>

            {/* Heart Icon */}
            <IconButton style={{ marginLeft: "auto" }}>
              <FavoriteBorderIcon />
            </IconButton>
          </div>

          {/* Article Title */}
          <Typography
            variant="title"
            style={{
              fontFamily: "Inika",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            {selectedArticle.heading}
          </Typography>

          {/* Article Description */}
          <Typography
            style={{
              whiteSpace: "pre-line",
              fontFamily: "Inika",
              fontWeight: 400,
              fontSize: "1.1rem",
            }}
          >
            {selectedArticle.description}
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <Grid container spacing={1} height="100%">
      <Grid item xs={2} justifyContent="center">
        <List>{renderListItems()}</List>
      </Grid>

      <Grid item xs={3} justifyContent="center">
        {/* Content for item 2 */}
        <div
          style={{
            height: "80vh",
            overflowY: "auto",
          }}
        >
          <List>{renderNewsArticles()}</List>
        </div>
      </Grid>

      <Grid item xs={6} justifyContent="center">
        {/* Content for item 3 */}
        {renderSelectedArticle()}
      </Grid>

      <Grid item xs={1} justifyContent="center">
        {/* Content for item 4 */}
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
