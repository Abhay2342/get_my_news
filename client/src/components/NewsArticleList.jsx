// NewsArticleList.js
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import temp_img from "../assets/coming_soon.png";

const NewsArticleList = ({
  newsArticles,
  selectedArticle,
  handleArticleClick,
}) => {
  return (
    <div style={{ height: "80vh", overflowY: "auto" }}>
      <List>
        {newsArticles.map((article, index) => (
          <React.Fragment key={index}>
            <ListItem
              sx={{
                padding: "15px",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => handleArticleClick(article)}
            >
              {/* Article Image */}
              <img
                src={article.image || temp_img}
                className="img"
                // alt={`Article ${index + 1}`}
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
                  {article.title}
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
                  {article.publish_date}
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
                  {article.text}
                </div>
              </div>
            </ListItem>
            {index < newsArticles.length - 1 && (
              <Divider
                sx={{ borderTopWidth: "1px" }}
                variant="fullWidth"
                color="#3F3A3B"
                flexItem
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default NewsArticleList;
