import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";
import { useUser } from "./UserContext"; // Adjust the path accordingly

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  const { user } = useUser();

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
          <Typography variant="filter">Edit Profile</Typography>
        </Link>
      </Breadcrumbs>
    </div>
  );
}
