// SelectedArticle.js
import React from "react";
import { Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SelectedArticle = ({ selectedArticle }) => {
  if (!selectedArticle) {
    return null;
  }

  return (
    <div style={{ padding: "20px", height: "80vh", overflowY: "auto" }}>
      {/* Article Image */}
      <img
        src={selectedArticle.image}
        alt={selectedArticle.title}
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
            {selectedArticle.publish_date}
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
          {selectedArticle.title}
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
          {selectedArticle.text}
        </Typography>
      </div>
    </div>
  );
};

export default SelectedArticle;
