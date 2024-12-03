import React from "react";
import { Paper, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SavingCard() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Paper sx={{ padding: 2, bgcolor: theme.palette.blueAccent.main }}>
      <Typography variant="h6">{t("Saving")}</Typography>
      <Typography variant="h4">$421.29</Typography>
      <Typography color="textSecondary">{t("SavingChange")}</Typography>
    </Paper>
  );
}
