import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import CustomerGrowthChart from "../CustomerGrowthChart";
export default function CustomerGrowth() {
    return (
        <Paper sx={{ padding: 2 }} >
            <Typography variant="h6">Customer Growth</Typography>
            <Box height={"300px"} width={"100%"}>
                <CustomerGrowthChart />
            </Box>
        </Paper>
    );
}