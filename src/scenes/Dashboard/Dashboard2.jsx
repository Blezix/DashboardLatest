import TransactionHistory from '../../components/TransactionsTable';
import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

export default function Dashboard2() {
    return (
        <Box sx={{ flexGrow: 1, pl: 5, pr:5,pt:8 }}>
            <Grid container spacing={3}>
                {/* Top Cards: Earnings, Spending, Saving */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: 2,backgroundColor:"#96c6a1" }} >
                        <Typography variant="h6">Earnings</Typography>
                        <Typography variant="h4">$984.42</Typography>
                        <Typography color="textSecondary">+$120.88 from last month</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: 2,backgroundColor:"#f199a5" }}>
                        <Typography variant="h6">Spending</Typography>
                        <Typography variant="h4">$576.76</Typography>
                        <Typography color="textSecondary">-6.8% from last month</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ padding: 2,backgroundColor:"#a0cbf8" }}>
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
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent:"space-around",
                            margin: "auto",
                            marginBottom:"40px",
                            width:"80%",
                            height:"120px",
                            borderRadius:"20px",
                            background:"linear-gradient(to right bottom,#666 ,#484848,#4d4d4d)",
                            padding:3,
                            border:"4px solid #3e3d3d",
                            color:"white"
                        }}>
                        <Typography variant="h6">Card</Typography>
                        <Typography variant="h4">$34,000.00</Typography>
                        <Typography>Michael Smith</Typography>
                        </Box>
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

                {/* Expense Summary */}

                <Grid item xs={12} md={9}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Transaction History</Typography>
                        {/* Placeholder for customer growth chart */}
                        <TransactionHistory />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ padding: 2 }}>
                        <Typography variant="h6">Customer Growth</Typography>
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

