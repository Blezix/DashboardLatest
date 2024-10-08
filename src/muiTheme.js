import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#0d1f2b",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      main: "#ffffffd4",
    },
    text: {
      primary: "#242424",
      secondary: "#6c6666",
      notActive: "#848484",
    },
    blueAccent: {
      main: "#ddeff4",
    },
    greenAccent: {
      main: "#edfaf0",
    },
    redAccent: {
      main: "#fcedeb",
    },
    grey: {
      light: "#f7f7f7",
      400: "#bdbdbd",
      500: "#9e9e9e",
      main: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1700,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px", // Rounded corners
          textTransform: "none", // Disable uppercase transformation
          padding: "16px 64px", // Custom padding
          fontWeight: "bold", // Bold font weight
        },
        containedPrimary: {
          backgroundColor: "#242424",
          color: "#fdfdfd",
          "&:hover": {
            backgroundColor: "#1e1e1e",
            opacity: 0.9,
          },
        },
        containedSecondary: {
          backgroundColor: "#fdfdfd",
          color: "#242424",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        },
        textPrimary: {
          backgroundColor: "transparent",
          color: "#242424",
          "&:hover": {
            backgroundColor: "#e0e0e0",
            color: "#1e1e1e",
          },
        },
        textSecondary: {
          backgroundColor: "transparent",
          color: "#fdfdfd",
          fontWeight: "500",
          "&:hover": {
            backgroundColor: "#bdbdbd",
            color: "#242424",
          },
        },
      },
    }
  },
});

export default muiTheme;
