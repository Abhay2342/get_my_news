import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BasicBreadcrumbs = ({ selectedItem }) => {
  const [user, setUserData] = useState(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedUserData = localStorage.getItem("user");
      setUserData(JSON.parse(storedUserData));
    };

    checkLoginStatus();
  }, []); // Empty dependency array to run once on mount

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <AccountCircleIcon
          color="primary"
          sx={{ cursor: "pointer", fontSize: "28px" }}
        />
        <Link underline="hover" color="inherit" href="/">
          {user ? (
            <>{user.uname}</>
          ) : (
            // If user data is not available, show a loading state or handle accordingly
            <Typography variant="filter">Loading...</Typography>
          )}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <Typography variant="filter">{selectedItem}</Typography>
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
