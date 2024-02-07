import React, { useState, useEffect } from "react";
import { Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SelectedArticle = ({ selectedArticle, isLoggedIn }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [userCollection, setUserCollection] = useState(
    JSON.parse(localStorage.getItem("userCollection")) || []
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    if (isLoggedIn && selectedArticle) {
      const isArticleLiked = userCollection.some(
        (article) => article.title === selectedArticle.title
      );
      setIsLiked(isArticleLiked);
    } else {
      setIsLiked(false);
    }
  }, [isLoggedIn, selectedArticle, userCollection]);

  const handleLikeButton = async () => {
    setIsLiked(!isLiked);

    try {
      // setLoading(true);
      console.log("Category Search");
      const response = await fetch(
        `http://localhost:3000/user/uname/collection`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userData.email,
            newsArticle: selectedArticle,
          }),
        }
      );

      if (response.ok) {
        const newData = await response.json();

        // Update user context with email and other user data
        // loginUser(userData);
        // setNewsData(newsData);
        // console.log(response);
        // console.log(JSON.stringify(userData));
        localStorage.setItem(
          "userCollection",
          JSON.stringify(newData.collection)
        );
        setUserCollection(JSON.parse(localStorage.getItem("userCollection")));

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
  if (!selectedArticle) {
    return null;
  }

  return (
    <div style={{ padding: "20px", height: "80vh", overflowY: "auto" }}>
      <img
        src={selectedArticle.image}
        alt={selectedArticle.title}
        style={{
          width: "100%",
          height: "218px",
          objectFit: "cover",
        }}
      />

      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            style={{
              fontFamily: "Lalezar",
              fontWeight: 400,
            }}
          >
            {selectedArticle.publish_date}
          </Typography>

          <IconButton onClick={handleLikeButton} style={{ marginLeft: "auto" }}>
            {isLiked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>

        <Typography
          variant="title"
          style={{
            fontFamily: "Inika",
            fontWeight: 700,
            marginBottom: "10px",
          }}
        >
          {selectedArticle.title}
        </Typography>

        <Typography
          style={{
            whiteSpace: "pre-line",
            fontFamily: "Inika",
            fontWeight: 400,
            fontSize: "1.1rem",
          }}
        >
          {selectedArticle.text}
        </Typography>
      </div>
    </div>
  );
};

export default SelectedArticle;
