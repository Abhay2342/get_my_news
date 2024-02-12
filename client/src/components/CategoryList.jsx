import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";
import CircularProgress from "@mui/material/CircularProgress";

const CategoryList = ({
  newsData,
  selectedItem,
  handleCategoryClick,
  loadingCategory,
}) => {
  const categories = [
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

  const handleCategoryItemClick = async (category) => {
    handleCategoryClick(category);
  };

  return (
    <List>
      {categories.map((category) => (
        <ListItem
          key={category}
          onClick={() => handleCategoryItemClick(category)}
        >
          <ListItemButton
            sx={{
              lineHeight: "0px",
              fontFamily: "Inika",
              fontWeight: 700,
              fontSize: "1rem",
              color: selectedItem === category ? "#F24E1E" : "#3F3A3B",
              padding: "5px 10px",
            }}
          >
            {category}
          </ListItemButton>
          {selectedItem === category && (
            <>
              {loadingCategory ? (
                <CircularProgress size={12} />
              ) : (
                <Badge
                  color="error"
                  variant="dot"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                />
              )}
            </>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
