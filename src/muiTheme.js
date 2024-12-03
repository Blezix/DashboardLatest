import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0d1f2b",
    },
    secondary: {
      main: "#ffffff",
    },
    DropFileAccent: {
      main: "#a0dfff",
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
          backgroundColor: "#813535",
          color: "#242424",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        },
        containedButtonColor: {
          backgroundColor: "#4caf50",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#388e3c",
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
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
        columnHeaders: {
          backgroundColor: "white",
          color: "black",
          borderBottom: "1px solid lightgrey",
        },
        columnHeaderTitle: {
          fontWeight: "bold",
        },
        cell: {
          backgroundColor: "white",
          color: "black",
        },
        filler: {
          display: "none",
        },
        row: {
          backgroundColor: "transparent",
        },
        footerContainer: {
          backgroundColor: "transparent",
        },
        dateColumnCell: {
          color: "grey",
        },
      },
    },
    MuiQuill: {
      styleOverrides: {
        root: {
          "& .ql-toolbar": {
            backgroundColor: "#f0f0f0",
            color: "#000",
          },
          "& .ql-container": {
            backgroundColor: "#fff",
            color: "#000",
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff ",
    },
    secondary: {
      main: "#ffffff",
    },
    DropFileAccent: {
      main: "#466270",
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
          color: "#fff",
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
        containedButtonColor: {
          backgroundColor: "#4caf50",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#388e3c",
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
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
        columnHeaders: {
          backgroundColor: "#282828",
          color: "white",
          borderBottom: "1px solid grey",
        },
        columnHeaderTitle: {
          fontWeight: "bold",
        },
        cell: {
          backgroundColor: "#404040b5",
          color: "white",
        },
        filler: {
          display: "none",
        },
        row: {
          backgroundColor: "transparent",
        },
        footerContainer: {
          backgroundColor: "transparent",
        },
        dateColumnCell: {
          color: "grey",
        },
      },
    },
    MuiQuill: {
      styleOverrides: {
        root: {
          ".ql-toolbar": {
            backgroundColor: "#121212",
            color: "#ffffff",
          },
          ".ql-toolbar .ql-picker, .ql-toolbar button": {
            color: "#ffffff",
          },
          ".ql-toolbar button:hover, .ql-toolbar .ql-picker:hover": {
            color: "#90caf9",
          },
          ".ql-toolbar button:disabled": {
            color: "#666666",
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
