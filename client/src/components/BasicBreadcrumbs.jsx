import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <AccountCircleIcon
          color="primary"
          sx={{ cursor: "pointer", fontSize: "28px" }}
        />
        <Link underline="hover" color="inherit" href="/">
          Abhay2342
        </Link>
        {/* <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Edit Profile
        </Link> */}
        <Typography variant="filter">Edit Profile</Typography>
      </Breadcrumbs>
    </div>
  );
}
