import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Skeleton,
} from "@mui/material";
import { useThemeMode } from "../../ThemeModeContext";

export default function AppearanceSettings() {
  const { mode, toggleTheme } = useThemeMode();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleModeChange = (event, newMode) => {
    if (newMode !== null && newMode !== mode) {
      toggleTheme(newMode);
    }
  };

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
                value={mode}
                onChange={handleModeChange}
            >
              <ToggleButton
                  sx={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    border: mode === "light" ? "1px solid #000" : "none",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                  value="light"
              >
                Light Mode
              </ToggleButton>
              <ToggleButton
                  sx={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: "#333",
                    color: "#fff",
                    border: mode === "dark" ? "1px solid #fff" : "none",
                    "&:hover": {
                      backgroundColor: "#444",
                    },
                  }}
                  value="dark"
              >
                Dark Mode
              </ToggleButton>
            </ToggleButtonGroup>
        )}
      </Box>
  );
}