import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import CustomerGrowthChart from "../CustomerGrowthChart";
export default function CustomerGrowth() {
    return (
        <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Customer Growth</Typography>
            <Box sx={{ height: "auto", backgroundColor: '#f0f0f0' }}>
                <CustomerGrowthChart />
            </Box>
        </Paper>
    );
}