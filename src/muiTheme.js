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
    paperBackground: {
      main: "#ffffffd4",
    },
    text: {
      primary: "#242424",
      secondary: "#6c6666",
      notActive: "#848484",
    },
    blueAccent: {
      main: "#a0cbf8",
    },
    greenAccent: {
      main: "#96c6a1",
    },
    redAccent: {
      main: "#f199a5",
    },
    grey: {
      light: "#f7f7f7",
      main: "#757575",
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
    },
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
    paperBackground: {
      main: "rgba(48,47,47,0.78)",
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
      main: "#757575",
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
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#212125eb",
        },
      },
    },
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
    },
  },
});

export { lightTheme, darkTheme };