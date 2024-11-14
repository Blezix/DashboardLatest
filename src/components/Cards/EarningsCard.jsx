import React from 'react';
import {Paper, Typography, useTheme} from '@mui/material';

export default function EarningsCard() {
    const theme = useTheme();
    return (
        <Paper sx={{ padding: 2, bgcolor: theme.palette.greenAccent.main }}>
            <Typography variant="h6">Earnings</Typography>
            <Typography variant="h4">$984.42</Typography>
            <Typography color="textSecondary">+$120.88 from last month</Typography>
        </Paper>
    );
}