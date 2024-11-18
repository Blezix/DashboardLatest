import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Divider, useTheme } from "@mui/material";
import AppearanceSettings from "./AppearanceSettings";
import LanguageSettings from "./LanguageSettings";
import { useSettings } from "./SettingsContext";

export default function Settings() {
  const [language, setLanguage] = useState("English (UK)");
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, color: "text.primary" }}>
        Settings
      </Typography>
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Account" />
        <Tab label="Profile" />
        <Tab label="Appearance" />
      </Tabs>
      {tabValue === 2 && (
        <Box sx={{ mt: 3 }}>
          <AppearanceSettings />
          <Divider sx={{ my: 4 }} />
          <LanguageSettings language={language} setLanguage={setLanguage} />
        </Box>
      )}
    </Box>
  );
}
