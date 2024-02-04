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
import img from "../../assets/news.png";
import GoogleIcon from "../../assets/google.svg";
import TwitterIcon from "../../assets/twitter.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler for login button click

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <Container maxWidth="lg" style={{ height: "100vh" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        {/* Left Side with Image */}
        <Grid item xs={5}>
          <img
            src={img} // replace with the path to your image
            alt="Login Page Image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        {/* Right Side with Login Form */}
        <Divider
          orientation="vertical"
          sx={{ marginX: "50px", borderRightWidth: 2 }}
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
              <Grid container justifyContent="space-between" spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    sx={{
                      background: "#FFFFFF",
                      margin: "5px 0px",
                      boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                      border: 1,
                    }}
                    label="FIRST NAME"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="text"
                    required
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    sx={{
                      background: "#FFFFFF",
                      margin: "5px 0px",
                      boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                      border: 1,
                    }}
                    label="LAST NAME"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="text"
                    required
                  />
                </Grid>
              </Grid>
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "5px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="EMAIL"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                required
              />
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "5px 0px",
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                  border: 1,
                }}
                label="USERNAME"
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
                required
              />
              <TextField
                sx={{
                  background: "#FFFFFF",
                  margin: "5px 0px",
                  border: 1,
                  boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                }}
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                required
              />
              <Grid
                container
                justifyContent="flex-start"
                alignItems="center"
                sx={{ paddingTop: "20px" }}
              >
                <Grid item>
                  <Typography variant="filter">
                    <Button
                      variant="text"
                      sx={{ fontWeight: 700, fontFamily: "Inika" }}
                      onClick={handleLoginClick}
                    >
                      <Link href="/login" color="inherit">
                        Already a Member?{" "}
                        <span style={{ fontWeight: "bold" }}>LOG IN</span>
                      </Link>
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{}}
              >
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    sx={{
                      backgroundColor: "#F24E1E",
                      fontFamily: "Inika",
                      borderRadius: "0px",
                      lineHeight: "2rem",
                      border: "12px",
                    }}
                  >
                    SIGN UP
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    container
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{ paddingBottom: "5px", paddingTop: "5px" }}
                  >
                    <Grid item>
                      {/* Social Icons To Sign In Items */}
                      <img
                        src={GoogleIcon} // replace with the path to your image
                        alt="Google"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>

                    <Grid item marginX={"15px"}>
                      <img
                        src={TwitterIcon} // replace with the path to your image
                        alt="Login Page Image"
                        style={{
                          width: "40px",
                          height: "37px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>

                    <Grid item>
                      <img
                        src={LinkedInIcon} // replace with the path to your image
                        alt="Login Page Image"
                        style={{
                          width: "37px",
                          height: "37px",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
