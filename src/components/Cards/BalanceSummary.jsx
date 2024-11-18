import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import Chart from "react-apexcharts";

// Sample data
const data = [
  { id: 0, label: "Jan", value: 30 },
  { id: 1, label: "Feb", value: 20 },
  { id: 2, label: "Mar", value: 50 },
  { id: 3, label: "Apr", value: 40 },
  { id: 4, label: "May", value: 60 },
];

// Chart options for line chart
const chartOptions = {
  chart: {
    type: "line", // Change chart type to 'line'
  },
  xaxis: {
    categories: data.map((item) => item.label),
  },
  stroke: {
    curve: "smooth", // Optional: to make the line smooth
    width: 3, // Line thickness
  },
  markers: {
    size: 5, // Marker size
    colors: ["rgba(69,190,255,0.83)"],
  },
  fill: {
    colors: ["rgba(0,51,255,0.68)"], // Line color fill
    opacity: 0.3, // Transparency of the fill color
  },
  grid: {
    show: true, // Show grid lines
  },

  tooltip: {
    shared: true, // Show data for all series at a time
    intersect: false, // Tooltip shows when mouse hovers over any point
  },
};

// Chart series data
const chartSeries = [
  {
    name: "Balance",
    data: data.map((item) => item.value),
  },
];

export default function BalanceSummary() {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Balance Summary</Typography>
      <Box
        sx={{ height: "300px", width: "100%", backgroundColor: "transparent" }}
      >
        {data && data.length ? (
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line" // Use 'line' type
            height="100%"
            width="100%"
          />
        ) : (
          <Typography variant="body1">No data available</Typography>
        )}
      </Box>
    </Paper>
  );
}
