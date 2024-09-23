import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const data = [
    { id: 0, label: 'series A', value: 10 },
    { id: 1, label: 'series B', value: 15 },
];

export default function PieChartComponent() {
    return (
        <Box>
            <Typography variant="h5">Pie Chart</Typography>
            {data && data.length ? (
                <PieChart
                    series={data}
                    width={400}
                    height={80}
                />
            ) : (
                <Typography variant="body1">No data available</Typography>
            )}
        </Box>
    );
}