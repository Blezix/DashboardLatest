import React from "react";
import { Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const data = [
    { id: 0, label: 'series A', value: 10 },
    { id: 1, label: 'series B', value: 15 },
    { id: 2, label: 'series C', value: 20 },
];

const chartOptions = {
    chart: {
        type: 'donut',
    },
    labels: data.map(item => item.label),
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '50%',
            },
                expandOnClick: false,
        },
    },
};

const chartSeries = data.map(item => item.value);

export default function CustomerGrowthChart() {
    return (
        <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"}>
            {data && data.length ? (
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="donut"
                    width="100%"
                    height="100%"
                />
            ) : (
                <Typography variant="body1">No data available</Typography>
            )}
        </Box>
    );
}