import React from "react";
import { Paper, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SpendingCard() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Paper sx={{ padding: 2, bgcolor: theme.palette.redAccent.main }}>
      <Typography variant="h6">{t("Spending")}</Typography>
      <Typography variant="h4">$576.76</Typography>
      <Typography color="textSecondary">{t("SpendingChange")}</Typography>
    </Paper>
  );
}
