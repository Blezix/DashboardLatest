import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function SpendingCard() {
    return (
        <Paper sx={{ padding: 2, backgroundColor: "#f199a5" }}>
            <Typography variant="h6">Spending</Typography>
            <Typography variant="h4">$576.76</Typography>
            <Typography color="textSecondary">-6.8% from last month</Typography>
        </Paper>
    );
}