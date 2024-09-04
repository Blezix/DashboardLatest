import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import DashboardTabs from "../../components/DashboardTabs";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" sx={{ padding: 2 }}>
      <Box width="100%">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ padding: 2 }}>
              <Typography variant="h4">Dashboard</Typography>
              <Button variant="contained" color="primary">
                Click me!
              </Button>
            </Box>
          </Grid>
          <Grid sx={{bgcolor:"grey.light"}} item xs={12} md={5} ></Grid>

          <Grid item xs={12} md={7}>
            <DashboardTabs />
          </Grid>
          <Grid sx={{bgcolor:"grey.main"}} item xs={12} md={5} ></Grid>
          <Grid sx={{bgcolor:"grey.main"}} item xs={12} md={7} ></Grid>
          <Grid sx={{bgcolor:"grey.light"}} item xs={12} md={5} ></Grid>

        </Grid>
      </Box>
    </Box>
  );
}