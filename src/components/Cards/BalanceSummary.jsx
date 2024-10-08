import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';

const data = [
    { id: 0, label: 'Jan', value: 30 },
    { id: 1, label: 'Feb', value: 20 },
    { id: 2, label: 'Mar', value: 50 },
    { id: 3, label: 'Apr', value: 40 },
    { id: 4, label: 'May', value: 60 },
];


export default function BalanceSummary() {
    return (
        <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Balance Summary</Typography>
            <Box sx={{ height: "300px",width:"100%", backgroundColor: 'white' }}>
                <LineChart
                    slotProps={{
                        // Custom loading message
                        loadingOverlay: { message: 'Data should be available soon.' },
                        // Custom message for empty chart
                        noDataOverlay: { message: 'Select some data to display.' },
                    }}
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                           curve:"linear", data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    sx={{ height: "200px", width:"100%" }}
                />
            </Box>
        </Paper>
    );
}