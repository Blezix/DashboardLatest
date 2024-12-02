import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, useTheme, Skeleton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

export default function LanguageSettings({ language, setLanguage }) {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") || "en";
        setLanguage(savedLanguage);
        i18n.changeLanguage(savedLanguage);
    }, [setLanguage, i18n]);

    const handleLanguageChange = (e) => {
        const newLanguage = e.target.value;
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    if (loading) {
        return (
            <Box sx={{ mb: 4 }}>
                <Skeleton variant="text" width={100} height={40} />
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={200} height={56} sx={{ ml: 2 }} />
                </Box>
            </Box>
        );
    }

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