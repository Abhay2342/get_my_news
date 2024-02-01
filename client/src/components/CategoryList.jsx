// CategoryList.js
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";

const CategoryList = ({ selectedItem, handleCategoryClick }) => {
  const categories = [
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

  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category} onClick={() => handleCategoryClick(category)}>
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
            <Badge
              color="error"
              variant="dot"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
