import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import DashboardTabs from "../../components/DashboardTabs";
import UserDashboard from "../../components/UserDashboard";
import PieChartComponent from "../../components/PieChart";
import TransactionsTable from "../../components/TransactionsTable";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
      <Box width="100%" display="flex" justifyContent="center" pt={2}>
        <Box width="100%">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ pl: "5%", pr: "5%", paddingTop: "0" }}
              >
                <Typography variant="h4">Dashboard</Typography>
                <Button variant="contained" color="primary">
                  Click me!
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <DashboardTabs />
            </Grid>
            <Grid item xs={12} md={4} pr={2}>
              <UserDashboard />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                  sx={{ display: "flex", height: "300", flexDirection: "column" }}
                  pl={"5%"}
              >
                <Typography mb={2} variant="h5">
                  Last Transactions
                </Typography>
                <TransactionsTable />
              </Box>
            </Grid>
            <Grid sx={{ bgcolor: "grey.light" }} item xs={12} md={4}>
            </Grid>
          </Grid>
        </Box>
      </Box>
  );
}