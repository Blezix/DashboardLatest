import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const data = [
  { id: 0, label: "Jan", value: 30 },
  { id: 1, label: "Feb", value: 20 },
  { id: 2, label: "Mar", value: 50 },
  { id: 3, label: "Apr", value: 40 },
  { id: 4, label: "May", value: 60 },
];

const chartOptions = {
  chart: {
    type: "line",
  },
  xaxis: {
    categories: data.map((item) => item.label),
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  markers: {
    size: 5,
    colors: ["rgba(69,190,255,0.83)"],
  },
  fill: {
    colors: ["rgba(0,51,255,0.68)"],
    opacity: 0.3,
  },
  grid: {
    show: true,
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const chartSeries = [
  {
    name: "Balance",
    data: data.map((item) => item.value),
  },
];

export default function BalanceSummary() {
  const { t } = useTranslation();

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">{t("BalanceSummary")}</Typography>
      <Box
        sx={{ height: "300px", width: "100%", backgroundColor: "transparent" }}
      >
        {data && data.length ? (
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height="100%"
            width="100%"
          />
        ) : (
          <Typography variant="body1">{t("NoDataAvailable")}</Typography>
        )}
      </Box>
    </Paper>
  );
}
