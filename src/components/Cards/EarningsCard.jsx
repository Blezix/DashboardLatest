import React from "react";
import { Paper, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function EarningsCard() {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Paper sx={{ padding: 2, bgcolor: theme.palette.greenAccent.main }}>
            <Typography variant="h6">{t("Earnings")}</Typography>
            <Typography variant="h4">$984.42</Typography>
            <Typography color="textSecondary">{t("EarningsChange")}</Typography>
        </Paper>
    );
}