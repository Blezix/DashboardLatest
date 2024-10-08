import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function EarningsCard() {
    return (
        <Paper sx={{ padding: 2, backgroundColor: "#96c6a1" }}>
            <Typography variant="h6">Earnings</Typography>
            <Typography variant="h4">$984.42</Typography>
            <Typography color="textSecondary">+$120.88 from last month</Typography>
        </Paper>
    );
}