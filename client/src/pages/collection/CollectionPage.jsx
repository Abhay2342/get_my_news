import React, { useState, useEffect } from "react";

import LoggedInHeader from "../../components/LoggedInHeader";
import { Grid, Divider, Typography, TextField, Button } from "@mui/material";
import NewsArticleList from "../../components/NewsArticleList";
import SelectedArticle from "../../components/SelectedArticle";
import TextEditor from "../../components/TextEditor";

const CollectionPage = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  let [selectedArticle, setSelectedArticle] = useState(null || []);
  let [userCollection, setUserCollection] = useState(
    JSON.parse(localStorage.getItem("userCollection")) || []
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [userNotes, setUserNotes] = useState(null);
  const [newNotes, setNewNotes] = useState(null);

  const handleNotesChange = (content) => {
    setNewNotes(content);
  };

  const handleArticleClick = async (article) => {
    // console.log(article);
    setSelectedArticle(article);
    setUserNotes(article.notes);
  };

  const handleNotesSubmit = async (event) => {
    event.preventDefault();
    console.log(newNotes);
    // setSelectedArticle(selectedArticle);

    try {
      // setLoading(true);
      console.log("Category Search");
      const response = await fetch(
        `https://get-my-news-server.onrender.com/user/uname/collection/notes`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userData.email,
            selectedArticle: selectedArticle,
            notes: { notes: newNotes },
          }),
        }
      );

      if (response.ok) {
        const newData = await response.json();

        localStorage.setItem(
          "userCollection",
          JSON.stringify(newData.collection)
        );
        setUserCollection(JSON.parse(localStorage.getItem("userCollection")));
        // setUserNotes();
        // localStorage.setItem("isLoggedIn", "true");
        // window.location.reload(false);
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

  useEffect(() => {
    setSelectedArticle(userCollection[0]);
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
            newsArticles={userCollection}
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
            isLoggedIn={isLoggedIn}
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
          <form onSubmit={handleNotesSubmit}>
            {/* Replace TextField with TextEditor */}
            <TextEditor
              // handleProcedureContentChange={handleNotesSubmit}
              userNotes={userNotes}
              handleNotesChange={handleNotesChange}
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
