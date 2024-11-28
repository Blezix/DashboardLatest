import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import CustomerGrowthChart from "../CustomerGrowthChart";
import { useTranslation } from "react-i18next";

export default function CustomerGrowth() {
    const { t } = useTranslation();

    return (
        <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">{t("CustomerGrowth")}</Typography>
            <Box height={"300px"} width={"100%"}>
                <CustomerGrowthChart />
            </Box>
        </Paper>
    );
}