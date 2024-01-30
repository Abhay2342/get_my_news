import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";
import { Grid, Paper, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img1 from "../assets/article1.png";
import img2 from "../assets/article2.png";
import img3 from "../assets/article3.png";

const Body = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleItemClick = (item, article) => {
    setSelectedItem(item);
    setSelectedArticle(article);
  };

  useEffect(() => {
    // Set the default selected item to the first item
    setSelectedItem("All");
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
      <ListItem key={item} onClick={() => handleItemClick(item)}>
        <ListItemButton
          sx={{
            lineHeight: "0px",
            fontFamily: "Inika",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#3F3A3B",
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

  const newsArticles = [
    {
      image: img1,
      heading: "ECONOMIC CRISIS ON PEAK",
      date: "24-05-2023",
      description:
        "An economic crisis denotes a profound downturn in a nation's financial health, marked by economic contraction, widespread unemployment.",
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
      date: "Date for Article 4",
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

  const renderNewsArticles = () => {
    return newsArticles.map((article, index) => (
      <React.Fragment key={index}>
        <ListItem sx={{ alignItems: "flex-start" }}>
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
                color: "#3F3A3B",
              }}
            >
              {article.heading}
            </div>

            {/* Date */}
            <div
              style={{
                fontFamily: "Lalezar",
                fontWeight: 400,
                fontSize: "0.5rem",
                color: "#3F3A3B",
                marginBottom: "3px",
              }}
            >
              {article.date}
            </div>

            {/* Description */}
            <div
              style={{
                fontFamily: "Inika",
                fontWeight: 400,
                fontSize: "0.6rem",
                color: "#000",
                lineHeight: "10px",
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
          alignItems: "center",
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
        <div style={{ width: "100%" }}>
          {/* Date and Heart Icon */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
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
              <FavoriteIcon color="error" />
            </IconButton>
          </div>

          {/* Article Title */}
          <Typography
            variant="h5"
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
            variant="body1"
            style={{
              fontFamily: "Inika",
              fontWeight: 400,
              fontSize: "1rem",
            }}
          >
            {selectedArticle.description}
          </Typography>
        </div>
      </div>
    );
  };

  // ... (rest of the code)

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
      </Grid>
    </Grid>
  );
};

export default Body;
