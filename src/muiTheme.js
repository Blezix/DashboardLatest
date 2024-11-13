import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
          borderRadius: "4px",
          textTransform: "none",
          padding: "16px 64px",
          fontWeight: "bold",
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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#0d1f2b",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      main: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
      notActive: "#848484",
    },
    blueAccent: {
      main: "#1e3a5f",
    },
    greenAccent: {
      main: "#1b5e20",
    },
    redAccent: {
      main: "#b71c1c",
    },
    grey: {
      light: "#424242",
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
          borderRadius: "4px",
          textTransform: "none",
          padding: "16px 64px",
          fontWeight: "bold",
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

export { lightTheme, darkTheme };