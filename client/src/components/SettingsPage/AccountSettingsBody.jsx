// CategoryList.js
import React, { useEffect } from "react";
import {
  Avatar,
  Grid,
  Typography,
  Button,
  TextField,
  Link,
} from "@mui/material";
import { useState } from "react";
const AccountSettingsBody = ({}) => {
  // let userData = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log(formData);
    try {
      const response = await fetch(
        `https://get-my-news-server.onrender.com/user/update/${userData.uname}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );

      console.log("response:", response);

      if (response.ok) {
        let newData = await response.json();
        newData = JSON.stringify(newData);
        localStorage.setItem("user", newData);
        // userData = await JSON.parse(userData);
        // localStorage.setItem("user", userData);
        setUserData(JSON.parse(newData));
        console.log("Details Updated");
      } else {
        // Handle unsuccessful sign-up, show an error message, etc.
        console.error("User Updation failed");
        let data = await response.text();
        console.log(data);
      }
    } catch (error) {
      console.error("Error during details updation:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container rowSpacing={5}>
        <Grid item container spacing={1}>
          <Grid
            item
            container
            justifyContent={"flex-start"}
            justifyItems={"center"}
            xs={6}
          >
            <Typography
              variant="filter"
              sx={{ borderBottom: 2, fontSize: "1.5rem" }}
            >
              CHANGE YOUR PASSWORD
            </Typography>
          </Grid>

          <Grid item container spacing={5}>
            <Grid item xs={6}>
              <Typography variant="inputTitle">CURRENT PASSWORD</Typography>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "0px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="* * * * * * * * * * * * * *"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                name="curr_pass"
              />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="inputTitle">NEW PASSWORD</Typography>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "0px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="* * * * * * * * * * * * * *"
                variant="outlined"
                fullWidth
                margin="normal"
                type="pass"
                name="new_pass"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid
            item
            container
            justifyContent={"flex-start"}
            justifyItems={"center"}
            xs={6}
          >
            <Typography
              variant="filter"
              sx={{ borderBottom: 2, fontSize: "1.5rem" }}
            >
              CHANGE YOUR EMAIL
            </Typography>
          </Grid>

          <Grid item container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="inputTitle">NEW EMAIL ADDRESS</Typography>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "0px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="xyz@gmail.com"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                name="new_email"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item xs={12}>
            <Typography variant="inputTitle">API KEY</Typography>
            <TextField
              sx={{
                background: "#FFFFFF",
                margin: "0px 0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
              }}
              // label={userData.apikey}
              defaultValue={userData.apikey}
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              name="apikey"
            />
          </Grid>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="filter">
                <Button
                  variant="text"
                  sx={{ fontWeight: 700, fontFamily: "Inika" }}
                  //   onClick={}
                >
                  <Link
                    href="https://apilayer.com/marketplace/world_news-api"
                    color="inherit"
                    rel="noopener"
                    target="_blank"
                    sx={{ color: "inherit", textDecoration: "underline" }}
                  >
                    Click{" "}
                    <span style={{ fontWeight: "bold", color: "#F24E1E" }}>
                      Here
                    </span>{" "}
                    To Generate Your API KEY
                  </Link>
                </Button>
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="filter">
                <Button
                  variant="text"
                  sx={{ fontWeight: 700, fontFamily: "Inika" }}
                  //   onClick={}
                >
                  <Link
                    href="/login"
                    color="inherit"
                    sx={{ color: "inherit", textDecoration: "underline" }}
                  >
                    Don't Need This Account?{" "}
                    <span style={{ fontWeight: "bold", color: "#F24E1E" }}>
                      DELETE USER
                    </span>{" "}
                  </Link>
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            <Button
              // onClick={handleDateSubmit}
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#F24E1E",
                fontFamily: "Inika",
                borderRadius: "0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
                borderColor: "black",
              }}
            >
              SAVE CHANGES
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default AccountSettingsBody;
