import React, { useState, useEffect } from "react";
import { Grid, Box, Skeleton } from "@mui/material";
import EarningsCard from "../../components/Cards/EarningsCard";
import SpendingCard from "../../components/Cards/SpendingCard";
import SavingCard from "../../components/Cards/SavingCard";
import BalanceSummary from "../../components/Cards/BalanceSummary";
import CardInfo from "../../components/Cards/CardInfo";
import TransactionHistory from "../../components/TransactionsTable";
import CustomerGrowth from "../../components/Cards/CustomerGrowth";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 5, overflow: "auto" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          {loading ? (
            <Skeleton variant="rounded" height={200} />
          ) : (
            <EarningsCard />
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {loading ? (
            <Skeleton variant="rounded" height={200} />
          ) : (
            <SpendingCard />
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {loading ? (
            <Skeleton variant="rounded" height={200} />
          ) : (
            <SavingCard />
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          {loading ? (
            <Skeleton variant="rounded" height={400} />
          ) : (
            <BalanceSummary />
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {loading ? (
            <Skeleton variant="rounded" height={200} />
          ) : (
            <CardInfo />
          )}
        </Grid>
        <Grid item xs={12} md={9}>
          {loading ? (
            <Skeleton variant="rounded" height={400} />
          ) : (
            <TransactionHistory />
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          {loading ? (
            <Skeleton variant="rounded" height={200} />
          ) : (
            <CustomerGrowth />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
