import React from "react";
import { Box, Typography, TextField, useTheme } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

export default function LanguageSettings({ language, setLanguage }) {
    const theme = useTheme();
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        const newLanguage = e.target.value;
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    return (
        <Box sx={{ mb: 4 }}>
            <Typography sx={{ color: "text.secondary" }}>{t("Language")}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <LanguageIcon
                    sx={{ mr: 1, color: "text.secondary", fontSize: "2rem" }}
                />
                <TextField
                    select
                    SelectProps={{ native: true }}
                    value={language}
                    onChange={handleLanguageChange}
                    sx={{ width: 200 }}
                >
                    <option value="en">English</option>
                    <option value="pl">Polish</option>
                </TextField>
            </Box>
        </Box>
    );
}