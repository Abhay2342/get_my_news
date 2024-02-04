// CategoryList.js
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Badge from "@mui/material/Badge";
import { Avatar, Grid, Typography, Button, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ProfileSettingsBody = ({}) => {
  const [gender, setGender] = React.useState("female");

  const handleGenderChange = (event) => {
    setGender(event.target.gender);
  };
  return (
    <form>
      <Grid container rowSpacing={1}>
        <Grid item container spacing={1}>
          <Grid
            item
            container
            justifyContent={"flex-start"}
            justifyItems={"center"}
            xs={6}
          >
            <Grid item xs={3}>
              <Avatar sx={{ height: "100px", width: "100px" }}>
                <AccountCircleIcon sx={{ fontSize: "80px" }} />
              </Avatar>
            </Grid>

            <Grid item container xs={5}>
              <Grid item>
                <Button
                  // onClick={handleDateSubmit}
                  variant="contained"
                  sx={{
                    backgroundColor: "#FE7249",
                    fontFamily: "Inika",
                    borderRadius: "0px",
                    border: 1,
                    borderColor: "black",
                    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  REMOVE PICTURE
                </Button>
              </Grid>

              <Grid item>
                <Button
                  // onClick={handleDateSubmit}
                  variant="contained"
                  sx={{
                    backgroundColor: "#FE7249",
                    fontFamily: "Inika",
                    borderRadius: "0px",
                    border: 1,
                    borderColor: "black",
                    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  REPLACE PICTURE
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="inputTitle">FIRST NAME</Typography>
            <TextField
              sx={{
                background: "#FFFFFF",
                margin: "0px 0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
              }}
              label="Abhay"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              required
            />
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="inputTitle">AGE</Typography>
            <TextField
              sx={{
                background: "#FFFFFF",
                margin: "0px 0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
              }}
              label="21"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              required
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="inputTitle">LAST NAME</Typography>
            <TextField
              sx={{
                background: "#FFFFFF",
                margin: "0px 0px",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
                border: 1,
              }}
              label="Singh"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              required
            />
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item xs={12}>
            <Typography variant="inputTitle">TELL US ABOUT YOU</Typography>
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
              rows={8}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Grid item>
            <Typography variant="inputTitle">WHAT'S YOUR GENDER?</Typography>
          </Grid>
          <Grid item>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                row
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
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

export default ProfileSettingsBody;
