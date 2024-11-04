import React from 'react';
import { Grid, Box } from '@mui/material';
import EarningsCard from '../../components/Cards/EarningsCard';
import SpendingCard from '../../components/Cards/SpendingCard';
import SavingCard from '../../components/Cards/SavingCard';
import BalanceSummary from '../../components/Cards/BalanceSummary';
import CardInfo from '../../components/Cards/CardInfo';
import TransactionHistory from '../../components/TransactionsTable';
import CustomerGrowth from '../../components/Cards/CustomerGrowth';

export default function Dashboard2() {



    return (
        <Box sx={{ flexGrow: 1, p:5, overflow:"auto" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <EarningsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <SpendingCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <SavingCard />
                </Grid>
                <Grid item xs={12} md={8}>
                    <BalanceSummary />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardInfo />
                </Grid>
                <Grid item xs={12} md={9}>
                    <TransactionHistory />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CustomerGrowth />
                </Grid>
            </Grid>
        </Box>
    );
}