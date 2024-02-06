// CategoryList.js
import React from "react";
import {
  Avatar,
  Grid,
  Typography,
  Button,
  TextField,
  Link,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const AccountSettingsBody = ({}) => {
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
        "http://localhost:3000//user/update/:uname",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );

      console.log("Support response:", response);

      if (response.ok) {
        // Handle successful sign-up, e.g., redirect to a confirmation page
        console.log("Ticket Created");
        // navigate("/login");
      } else {
        // Handle unsuccessful sign-up, show an error message, etc.
        console.error("Ticket Creation failed");
        let data = await response.text();
        console.log(data);
      }
    } catch (error) {
      console.error("Error during Ticket Creation:", error);
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
                type="text"
                required
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
                type="text"
                required
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
                type="text"
                required
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
              label="* * * * * * * * * * * * * *"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              required
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
