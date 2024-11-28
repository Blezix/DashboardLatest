import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Divider, useTheme } from "@mui/material";
import AppearanceSettings from "./AppearanceSettings";
import LanguageSettings from "./LanguageSettings";
import WorkInProgress from "./WorkInProgress";
import { useTranslation } from "react-i18next";

export default function Settings() {
    const [language, setLanguage] = useState("en");
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const { t } = useTranslation();

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", padding: 3 }}>
            <Typography variant="h5" sx={{ mb: 3, color: "text.primary" }}>
                {t("Settings")}
            </Typography>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
                <Tab label={t("Account")} />
                <Tab label={t("Profile")} />
                <Tab label={t("Appearance")} />
            </Tabs>
            {tabValue === 0 && (
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
            )}
            {tabValue === 1 && (
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
            )}
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