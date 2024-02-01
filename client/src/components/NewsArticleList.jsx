// NewsArticleList.js
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

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
        ))}
      </List>
    </div>
  );
};

export default NewsArticleList;
