import React from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import img from "../../assets/contact_us.png";

import { useNavigate } from "react-router-dom"; // Import useNavigate

const ContactUs = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler for login button click

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <Container
      style={{
        height: "100vh",
        paddingX: "0px",
        alignSelf: "center",
        justifyContent: "center",
      }}
      maxWidth="1400px"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        {/* Left Side with Image */}
        <Grid item xs={5} alignSelf={"flex-start"}>
          <img
            src={img} // replace with the path to your image
            alt="Contact Us Image"
          />
        </Grid>
        {/* Right Side with Login Form */}
        <Divider
          orientation="vertical"
          sx={{ marginX: "20px", borderRightWidth: 2 }}
          variant="middle"
          flexItem
        />

        <Grid
          item
          xs={5}
          sx={{ justifyContent: "center" }}
          justifyContent="center"
        >
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              textAlign: "flex-start",
              border: "0px",
              boxShadow: "0px 0px 0px 0px",
            }}
          >
            <Button variant="text" onClick={handleLogoClick}>
              <Typography variant="h1" sx={{ marginBottom: "30px" }}>
                GET MY NEWS
              </Typography>
            </Button>
            <form>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <Typography variant="inputTitle">Name</Typography>
                  <TextField
                    sx={{
                      background: "#FFFFFF",
                      margin: "0px 0px",
                      boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                      border: 1,
                    }}
                    label="Abhay Suryawanshi"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="text"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="inputTitle">Email</Typography>
                  <TextField
                    sx={{
                      background: "#FFFFFF",
                      margin: "0px 0px",
                      border: 1,
                      boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                    }}
                    label="EMAIL ADDRESS"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="inputTitle">
                    HOW CAN WE HELP YOU?
                  </Typography>
                  <TextField
                    sx={{
                      background: "#FFFFFF",
                      margin: "0px 0px",
                      boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                      border: 1,
                    }}
                    label=""
                    variant="outlined"
                    fullWidth
                    multiline
                    margin="normal"
                    type="text"
                    rows={5}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
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
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
