import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import DashboardTabs from "../../components/DashboardTabs";
import UserDashboard from "../../components/UserDashboard";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      sx={{ padding: 2 }}
    >
      <Box width="100%">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ padding: 2, pl: "5%" }}
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
          <Grid sx={{ bgcolor: "grey.main" }} item xs={12} md={8}></Grid>
          <Grid sx={{ bgcolor: "grey.light" }} item xs={12} md={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
