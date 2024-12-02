import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Divider, useTheme } from "@mui/material";

import { useTranslation } from "react-i18next";
import TabResolver from "../../components/TabResolver";
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
        <TabResolver tabValue={tabValue} language={language} setLanguage={setLanguage} />
        </Box>
    );
}