import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import CustomerGrowthChart from "../CustomerGrowthChart";
import { useTranslation } from "react-i18next";

export default function CustomerGrowth() {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        height: "calc(100% - 20px)",
        width: "95%",
        padding: "10px",
      }}
    >
      <Typography variant="h6">{t("CustomerGrowth")}</Typography>
      <Box height={"300px"} width={"100%"}>
        <CustomerGrowthChart />
      </Box>
    </Paper>
  );
}
