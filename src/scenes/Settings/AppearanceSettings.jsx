import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Skeleton,
} from "@mui/material";
import { ThemeContext } from "../../ThemeModeContext";

export default function AppearanceSettings() {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{ color: "text.secondary" }}>Theme Color</Typography>
      {loading ? (
        <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
          <Skeleton variant="rectangular" width={200} height={100} />
          <Skeleton variant="rectangular" width={200} height={100} />
        </Box>
      ) : (
        <ToggleButtonGroup
          exclusive
          sx={{ mt: 1, display: "flex", gap: 1 }}
          value={themeMode}
        >
          <ToggleButton
            sx={{
              width: "200px",
              height: "100px",
              backgroundColor: "#f0f0f0",
              color: "#000",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
            onClick={() =>
              themeMode === "light" ? null : toggleTheme("light")
            }
          >
            Light Mode
          </ToggleButton>
          <ToggleButton
            sx={{
              width: "200px",
              height: "100px",
              backgroundColor: "#333",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#444",
              },
            }}
            value="dark"
            onClick={() => (themeMode === "dark" ? null : toggleTheme("dark"))}
          >
            Dark Mode
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </Box>
  );
}
