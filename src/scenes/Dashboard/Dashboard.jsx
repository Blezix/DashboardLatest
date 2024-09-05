import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import DashboardTabs from "../../components/DashboardTabs";
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
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              height={"100%"}
            >
              <Box
                height={"50%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Avatar
                  variant="circular"
                  src=""
                  alt=""
                  sx={{ width: "45px", height: "45px" }}
                />
                <Typography variant="caption" color="initial">
                  Welcome back,
                </Typography>
                <Typography variant="h6">John Doe</Typography>
              </Box>
              <Box
                height={"50%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box
                  width={"90%"}
                  height={"45%"}
                  sx={{ border: "1px solid lightgrey" }}
                  p={1}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Avatar
                    variant="circular"
                    src=""
                    alt=""
                    sx={{ width: "45px", height: "45px", margin:"0 5% 0 5%" }}
                  />
                  <Box
                    display={"flex"}
                    width="30%"
                    flexDirection={"column"}
                    pl={2}
                  >
                    <Typography variant="h7" color="grey.main" >
                      Income
                    </Typography>
                    <Typography variant="h6">$1000</Typography>
                  </Box>
                </Box>
                <Box
                  width={"90%"}
                  height={"45%"}
                  sx={{ border: "1px solid lightgrey" }}
                  p={1}
                ></Box>
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ bgcolor: "grey.main" }} item xs={12} md={8}></Grid>
          <Grid sx={{ bgcolor: "grey.light" }} item xs={12} md={4}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
