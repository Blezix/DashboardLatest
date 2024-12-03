import React from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import AppearanceSettings from "../scenes/Settings/AppearanceSettings";
import LanguageSettings from "../scenes/Settings/LanguageSettings";
import WorkInProgress from "../scenes/Settings/WorkInProgress";
export default function SettingsContent({ tabValue, language, setLanguage }) {
  const theme = useTheme();

  switch (tabValue) {
    case 0:
      return (
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
            color: theme.palette.text.primary,
          }}
        >
          <WorkInProgress />
        </Box>
      );
    case 1:
      return (
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
            color: theme.palette.text.primary,
          }}
        >
          <WorkInProgress />
        </Box>
      );
    case 2:
      return (
        <Box sx={{ mt: 3 }}>
          <AppearanceSettings />
          <Divider sx={{ my: 4 }} />
          <LanguageSettings language={language} setLanguage={setLanguage} />
        </Box>
      );
    default:
      return <Typography variant={"h2"}>"No content to display" </Typography>;
  }
}
