


import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

export default function Dashboard2() {
    return (
        <Box sx={{ flexGrow: 1, pl: 5, pr:5,pt:10 }}>
            <Grid container spacing={3}>
                {/* Top Cards: Earnings, Spending, Saving */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Earnings</Typography>
                        <Typography variant="h4">$984.42</Typography>
                        <Typography color="textSecondary">+$120.88 from last month</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Spending</Typography>
                        <Typography variant="h4">$576.76</Typography>
                        <Typography color="textSecondary">-6.8% from last month</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Saving</Typography>
                        <Typography variant="h4">$421.29</Typography>
                        <Typography color="textSecondary">+$46.11 from last month</Typography>
                    </Paper>
                </Grid>

                {/* Balance Summary (Graph) */}
                <Grid item xs={12} md={8}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Balance Summary</Typography>
                        {/* Placeholder for chart */}
                        <Box sx={{ height: 200, backgroundColor: '#f0f0f0' }}>
                            {/* Replace this box with your actual chart */}
                            <Typography align="center" sx={{ paddingTop: 8 }}>Chart</Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Card and Quick Transaction */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Card</Typography>
                        <Typography variant="h4">$34,000.00</Typography>
                        <Typography>Michael Smith</Typography>
                        {/* Add Send, Request, Add buttons here */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                            <Box>Send</Box>
                            <Box>Request</Box>
                            <Box>Add</Box>
                        </Box>
                    </Paper>
                </Grid>

                {/* Admit Snap */}
                

                {/* Customer Growth */}
                <Grid item xs={12} md={3}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Customer Growth</Typography>
                        {/* Placeholder for customer growth chart */}
                        <Box sx={{ height: 100, backgroundColor: '#f0f0f0' }}>
                            <Typography align="center" sx={{ paddingTop: 4 }}>Customer Chart</Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Expense Summary */}
                <Grid item xs={12} md={3}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Expense Summary</Typography>
                        <Typography variant="h4">$9670</Typography>
                        <Typography>72% Total Expense</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Transaction History</Typography>
                        {/* Placeholder for customer growth chart */}
                        <Box sx={{ height: 100, backgroundColor: '#f0f0f0' }}>
                            <Typography align="center" sx={{ paddingTop: 4 }}>Customer Chart</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
};

