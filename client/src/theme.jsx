import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiIconButton: {
      scroll: {
        innerHeight: "22px",
      },
    },
    MuiButton: {
      styleOverrides: {
        link: {
          fontFamily: "Inika",
          textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          fontWeight: 700,
          fontSize: "0.8rem",
          color: "#3F3A3B",
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        standard: {
          fontFamily: "Inika",
          textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          fontWeight: 700,
          fontSize: "0.8rem",
          color: "#3F3A3B",
        },
        outlined: {
          fontFamily: "Inika",
          fontWeight: 700,
          fontSize: "0.8rem",
          color: "#3F3A3B",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          // minHeight: "48px",
          "@media (min-width: 600px)": {
            minHeight: "48px",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#3F3A3B", // Change this to your primary color
    },
    secondary: {
      main: "#000000", // Change this to your secondary color
    },

    error: {
      main: "#F24E1E",
    },

    background: {
      paper: "#EAE5E1", // Background color for containers, cards, etc.
      default: "#EAE5E1", // Default background color for the entire document
    },
  },

  typography: {
    h1: {
      fontFamily: "Metal Mania",
      fontWeight: 400,
      fontSize: "3rem",
      textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
    },
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
      fontWeight: 400,
      fontSize: "6rem",
    },
    filter: {
      fontFamily: "Inika",
      fontWeight: 700,
      fontSize: "1rem",
      color: "#3F3A3B",
    },
    date: {
      fontFamily: "Inika",
      fontWeight: 700,
      fontSize: "1.2rem",
      color: "#3F3A3B",
    },
    title: {
      fontFamily: "Inika",
      fontWeight: 700,
      fontSize: "2.2rem",
      color: "#3F3A3B",
    },
    inputTitle: {
      fontFamily: "Inika",
      color: "3F3A3B",
      fontWeight: 400,
      fontSize: "1rem",
      textDecoration: "underline",
    },
  },
});

export default theme;
