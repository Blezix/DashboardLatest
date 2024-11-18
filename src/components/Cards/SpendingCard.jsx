import React from "react";
import { Paper, Typography, useTheme } from "@mui/material";

export default function SpendingCard() {
  const theme = useTheme();
  return (
    <Paper sx={{ padding: 2, bgcolor: theme.palette.redAccent.main }}>
      <Typography variant="h6">Spending</Typography>
      <Typography variant="h4">$576.76</Typography>
      <Typography color="textSecondary">-6.8% from last month</Typography>
    </Paper>
  );
}
