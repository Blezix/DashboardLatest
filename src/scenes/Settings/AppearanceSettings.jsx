import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Skeleton,
} from "@mui/material";
import { ThemeContext } from "../../ThemeModeContext";
import { useTranslation } from "react-i18next";

export default function AppearanceSettings() {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography sx={{ color: "text.secondary" }}>
        {t("ThemeColor")}
      </Typography>
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
          onChange={(event, value) => {
            if (value) {
              toggleTheme(value);
            }
          }}
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
            value="light"
          >
            {t("LightMode")}
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
          >
            {t("DarkMode")}
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </Box>
  );
}
